import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BLOG_POSTS, getAllPosts, RESOURCES } from '../lib/PostLoader'

import SpotifyWidget from '../components/home/SpotifyWidget';
import HomePageLayout from '../layouts/HomePageLayout';
import GithubRepoCard from '../components/home/GithubRepoCard';
import ResourceCard from '../components/home/ResourceCard';
import ContactForm from '../components/home/ContactForm';
import BlogPostListing from '../components/blog/BlogPostListing';

/**
 * Constants
 */
const GH_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL || ""
const GH_PROFILE_URL = process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || ""
const SPOTIFY_PLAYLIST_ID = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID || ""

export const getStaticProps: GetStaticProps = async (context) => {
  var posts = getAllPosts(BLOG_POSTS);
  var resources = getAllPosts(RESOURCES);

  posts = posts.slice(0, 3)
  resources = resources.slice(0, 5)

  return {
    props: {
      posts,
      resources
    }
  }
}

const Home: React.FC<Props> = ({ posts, resources }) => {
  const [repos, setRepos] = useState<GithubRepository[]>([]);

  useEffect(() => {
    var repos: GithubRepository[] = []

    axios.get(GH_API_URL)
      .then(response => {
        response.data.forEach((repo: any) => {
          // Don't use repos that are archived, dont havve a description or are forked
          if (repo.archived) return
          if (!repo.description) return
          if (repo.fork) return

          repos.push({
            name: repo.name,
            full_name: repo.full_name,
            url: repo.html_url,
            git: repo.git_url,
            desc: repo.description,
            updated_at: repo.updated_at,
            stars: repo.stargazers_count
          })

          // Sort newest first
          repos.sort(function (a, b) {
            return +new Date(b.updated_at) - +new Date(a.updated_at);
          });

          repos = repos.slice(0, 3)
          setRepos(repos);
        });
      })
  }, [])

  return (
    <HomePageLayout>
      <NextSeo title="Web & App Developer" />

      <div className="pt-16 md:pt-0">
        <h2 className="homepage-heading">Blog </h2>
        <p className="homepage-heading mb-10">Coming Soon.</p>

        {process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true' && posts.map((post, key) => {
          return <BlogPostListing key={key} post={post}/>
        })}
      </div>

      <div className="pt-28">
        <p className="homepage-heading mb-1">Recently Updated </p>
        <p className="homepage-heading mb-10 yellow-x">Projects</p>

        {repos.map((repo, key) => {
          var odd = (key % 2) ? true : false;
          return <GithubRepoCard repo={repo} key={key} odd={odd}/>
        })}

        <a href={GH_PROFILE_URL} target="_blank" rel="noreferrer" className="font-bold underline text-gray-100">View Github Profile</a>
      </div>

      <div className="pt-28">
        <p className="homepage-heading green-x">Resources</p>
        <p className="homepage-heading mb-10">I Find Useful</p>

        <div className="flex flex-row flex-wrap justify-center sm:justify-start ">
          {resources.map((resource, id) => {
            return <ResourceCard resource={resource} key={id} />
          })}
        </div>
      </div>

      { process.env.NEXT_PUBLIC_ENABLE_SPOTIFY === 'true' &&
        <div className="pt-28">
          <p className="homepage-heading red-x">Music</p>
          <p className="homepage-heading mb-10">While Coding</p>

          <SpotifyWidget playlistId={SPOTIFY_PLAYLIST_ID} />
        </div>
      }
      
      <div className="pt-28">
      <p className="homepage-heading mb-10">Contact Me</p>
      <p className="homepage-heading mb-10"></p>

        <ContactForm></ContactForm>
      </div>

      <div className="pt-20">
        <div className="bg-gray-900 w-full rounded-xl py-10">
          <p className="homepage-subheading text-green-500 mb-0">Email Me</p>
          <a className="leading-none font-extrabold tracking-tight text-2xl sm:text-4xl lg:text-5xl" href="mailto:michael@rausch.nz">michael@rausch.nz</a>
        </div>
      </div>
    </HomePageLayout>
  )
}

interface Props {
  posts: [any]
  resources: [any]
}

export interface GithubRepository {
  name: string,
  full_name: string,
  url: string,
  git: string,
  desc: string,
  updated_at: Date,
  stars: number
}

export default Home;