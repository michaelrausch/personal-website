import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { BLOG_POSTS, getAllPosts, RESOURCES } from '../lib/PostLoader'

import Layout from '../layouts/Layout';
import React from 'react';
import GithubReposWidget, { GithubRepository } from '../components/homepagewidgets/GithubReposWidget';
import HomepageHeaderWidget from '../components/homepagewidgets/HomepageHeaderWidget';
import BlogPostListing from '../components/homepagewidgets/BlogPostListing';
import SpotifyWidget from '../components/homepagewidgets/SpotifyWidget';
import { AnimatePresence, motion } from 'framer-motion';
import HomePageLayout from '../layouts/HomePageLayout';

const axios = require('axios').default;
const API_URL = "https://api.github.com/users/michaelrausch/repos"

export const getStaticProps: GetStaticProps = async (context) => {
  var posts = getAllPosts(BLOG_POSTS);
  var resources = getAllPosts(RESOURCES);

  var repos: GithubRepository[] = []
  var response

  try {
    response = await axios.get(API_URL)
  } catch (error) {
    return {
      props: {
        posts,
        repos,
        resources
      }
    }
  }

  // @ts-ignore
  response.data.forEach(repo => {
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
  });

  //@ts-ignore
  repos.sort(function (a, b) {
    return +new Date(b.updated_at) - +new Date(a.updated_at);
  });

  posts.sort(function (a: any, b: any) {
    return +new Date(b.date) - +new Date(a.date);
  });

  repos = repos.slice(0, 3)
  posts = posts.slice(0, 3)


  return {
    props: {
      posts,
      repos,
      resources
    }
  }
}

interface Props {
  posts: [any]
  repos: [any]
  resources: [any]
}

const Home: React.FC<Props> = ({ posts, repos, resources }) => {
  return (
    <HomePageLayout>
      <NextSeo title="Home" />
      <div>
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-blue-500 mb-3 ">Blog</h2>
        <p className="homepage-subheading mb-10">Some recent posts.</p>

        {posts.map((post, i) => {
          return <BlogPostListing key={i} post={post} />
        })}
      </div>

      <div className="pt-20">
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-yellow-500 mb-3 ">Projects</h2>
        <p className="homepage-subheading mb-1">Recently Updated </p>
        <p className="homepage-subheading mb-10">Projects</p>

        <GithubReposWidget repos={repos} />

        <a href="https://github.com/michaelrausch" target="_blank" rel="noreferrer" className="font-bold underline text-gray-100">View Github Profile</a>
      </div>

      <div className="pt-20">
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-red-500 mb-3 ">Resources</h2>
        <p className="homepage-subheading mb-10">Useful Resources</p>

        <div className="flex flex-row flex-wrap">
          {resources.map((resource, id) => {
            return <motion.a
              key={id}
              href={resource.url}
              whileHover={{ scale: 1.05 }}
              className="h-60 w-48 rounded-md mr-5 mb-5 bg-cover"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-md text-left">
                <div style={{ backgroundImage: 'url(' + resource.background + ')'}} className="h-32 rounded-md bg-cover"/>
                <small className="t text-base font-futura-pt">{resource.type}</small>
                <h4 className="relative font-futura-pt-bold text-xl">{resource.name}</h4>
              </div>
            </motion.a>
          })}
        </div>
      </div>

      <div className="pt-20">
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-red-500 mb-3 ">Tunes</h2>
        <p className="homepage-subheading mb-10">Coding Playlist</p>

        <SpotifyWidget playlistId="6PIsKjJ5VzOuUbgwFptMO7" />
      </div>

    </HomePageLayout>
  )
}

export default Home;