import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import React from 'react';

import { BLOG_POSTS, getAllPosts, RESOURCES } from '../lib/PostLoader'

import SpotifyWidget from '../components/home/SpotifyWidget';
import HomePageLayout from '../layouts/HomePageLayout';
import ResourceCard from '../components/home/ResourceCard';
import ContactForm from '../components/home/ContactForm';
import BlogPostListing from '../components/blog/BlogPostListing';
import GithubRepoList from '../components/home/GithubRepoList';
import { motion } from 'framer-motion';
import { ProjectFeatureCard } from '../components/ProjectFeatureCard';

/**
 * Constants
 */
const GH_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""
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
  const style='light';
  const color = "#111827"

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
        <p className="homepage-heading mb-1">Featured </p>
        <p className="homepage-heading mb-10 green-x">Projects</p>

        <div className="grid md:grid-cols-2 gap-5">
          <ProjectFeatureCard title={'Barber & Co'} imageUrl={'/images/barberco.png'} color={'#171A20'} technologies={'Swift, Realm, React Native, NodeJS, Mongo DB, Firebase, Shopify'} outUrl={'https://linktr.ee/barberandco'} style={'light'} ></ProjectFeatureCard>
          <ProjectFeatureCard title={'Amu Digital Website'} imageUrl={'/images/amd.png'} color={'#171A20'} technologies={'Next JS, Tailwind CSS, React, Prismic, Netlify'} outUrl={'https://amudigital.co.nz'} style={'light'} ></ProjectFeatureCard>
        </div>
      </div>

      <div className="pt-28">
        <p className="homepage-heading mb-1">Recently Updated </p>
        <p className="homepage-heading mb-10 yellow-x">Projects</p>

        <GithubRepoList username={GH_USERNAME}/>

        <a href={"https://github.com/" + GH_USERNAME} target="_blank" rel="noreferrer" className="font-bold underline text-gray-100">View Github Profile</a>
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

      <div className="pt-28">
        <p className="homepage-heading mb-1">Web Development </p>
        <p className="homepage-heading mb-10 blue-x">Stack</p>

        <div className="flex gap-10 flex-wrap">
          <img src="/brandLogos/react.png" className='h-14 object-contain' alt="" />
          <img src="/brandLogos/go.png" className='h-14 object-contain' alt="" />
          <img src="/brandLogos/ts.png" className='h-14 object-contain' alt="" />
          <img src="/brandLogos/firebase.png" alt="" className='h-14 object-contain'/>
          <img src="/brandLogos/next.svg" className='h-14 object-contain' alt="" />
          <img src="/brandLogos/vercel.svg" className='h-14 py-2 object-contain' alt="" />
          <img src="https://www.docker.com/wp-content/uploads/2022/03/Docker-Logo-White-RGB_Horizontal.png" className='h-14 py-2 object-contain' alt="" />
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

export default Home;