import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { BLOG_POSTS, getAllPosts } from '../lib/PostLoader'

import Layout from '../layouts/Layout';
import React from 'react';
import GithubReposWidget, { GithubRepository } from '../components/homepagewidgets/GithubReposWidget';
import HomepageHeaderWidget from '../components/homepagewidgets/HomepageHeaderWidget';
import BlogPostListing from '../components/homepagewidgets/BlogPostListing';
import SpotifyWidget from '../components/homepagewidgets/SpotifyWidget';

const axios = require('axios').default;
const API_URL = "https://api.github.com/users/michaelrausch/repos"

export const getStaticProps: GetStaticProps = async (context) => {
  var posts = getAllPosts(BLOG_POSTS);

  var repos: GithubRepository[] = []
  var response

  try {
    response = await axios.get(API_URL)
  } catch (error) {
    return {
      props: {
        posts,
        repos
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
      repos
    }
  }
}

interface Props {
  posts: [any]
  repos: [any]
}

const Home: React.FC<Props> = ({ posts, repos }) => {
  return (
    <Layout>
      <NextSeo title="Home" />

      <div className="my-32 text-black dark:text-white">
        <HomepageHeaderWidget 
          name="Michael" 
          bio="I'm a freelance software engineer with a passion for everything web and mobile app development. "/>
      </div>

      <div>
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-blue-500 mb-3 ">Blog</h2>
        <p className="homepage-subheading mb-10">Some recent posts.</p>

        {posts.map((post, i) => {
          return <BlogPostListing key={i} post={post} />
        })}
      </div>

      <div className="pt-20">
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-red-500 mb-3 ">Tunes</h2>
        <p className="homepage-subheading mb-10">Music While Coding?</p>

        <SpotifyWidget playlistId="2kjnFCSoen7qv2GC6L0h2s" />
      </div>

      <div className="pt-20">
        <h2 className="sm:text-lg sm:leading-snug  font-futura-pt-bold tracking-wide uppercase text-yellow-500 mb-3 ">Projects</h2>
        <p className="homepage-subheading mb-1">Recently Updated </p>
        <p className="homepage-subheading mb-10">Projects</p>

        <GithubReposWidget repos={repos} />
      </div>

      <div className="pt-20">
        <a href="https://michaelrausch.nz" rel="noreferrer" target="_blank" className="text-green-400 font-black text-4xl underline">Back To Main Website</a>
      </div>
    </Layout>
  )
}

export default Home;