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
import Link from 'next/link';

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
  return (
    <HomePageLayout>
      <NextSeo title="Web & App Developer" />

      {/* <div className="pt-16 md:pt-0">
        <h2 className="homepage-heading">Blog </h2>
        <p className="homepage-heading mb-10">Coming Soon.</p>

        {process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true' && posts.map((post, key) => {
          return <BlogPostListing key={key} post={post}/>
        })}
      </div> */}

      <div className="pt-24 sm:pt-18 custom-container relative" style={{backgroundColor: "#CC2936"}}>
        <p className="homepage-heading mb-1 text-black tracking-tighter z-50 relative">Featured Projects </p>
            <div className="grid md:grid-cols-3 gap-5 pt-10 z-50 relative">
                <ProjectFeatureCard title={'UC Online'} imageUrl={'/images/uc.png'} color={'#000'} technologies={'Angular, Python, Django, AWS, Azure B2C, Stripe'} outUrl={'https://uconline.ac.nz'} style={'light'} ></ProjectFeatureCard>
                <ProjectFeatureCard title={'QuickView'} imageUrl={'/images/quickview.png'} color={'#000'} technologies={'Next JS, Tailwind CSS, React, Prismic, Netlify'} outUrl={'https://actuality.co.nz'} style={'light'} ></ProjectFeatureCard>
                <ProjectFeatureCard title={'Barber & Co'} imageUrl={'/images/barberco.png'} color={'#000'} technologies={'Swift, Realm, React Native, NodeJS, Mongo DB, Firebase, Shopify'} outUrl={'https://linktr.ee/barberandco'} style={'light'} ></ProjectFeatureCard>
            </div>

            <div className={"py-14"}></div>

      </div>

      <div className="pt-28" style={{backgroundColor: "#030301"}}>
          <div className={"custom-container"}>
              <p className="homepage-heading mb-1 text-black tracking-tighter" style={{color: "#fff"}}>Github Projects</p>
              <a className="font-itc-avant-garde-gothic-pro" href={"https://github.com/" + GH_USERNAME} target="_blank" rel="noreferrer" style={{color: "#fff"}}>View Github Profile</a>

              <div className={"pt-10"}></div>
              <GithubRepoList username={GH_USERNAME}/>


              <div className={"pt-14"}></div>

          </div>
      </div>

      <div className="py-44 custom-container relative" style={{backgroundColor: "#030301"}} >
          <p className="homepage-heading mb-1 text-white tracking-tighter ">Bookmarks</p>
          <p className="font-itc-avant-garde-gothic-pro text-white mb-10">Tools & Resources I Find Useful</p>

        <div className="flex flex-row flex-wrap justify-center sm:justify-start z-50 relative">
          {resources.map((resource, id) => {
            return <ResourceCard resource={resource} key={id} />
          })}
        </div>

          <div className={"w-full h-full top-0 right-0 absolute bg-right-bottom z-0 bg-no-repeat opacity-5" } style={{backgroundImage: "url(/images/projects.png"}}></div>

      </div>


        <div className="pt-28" style={{backgroundColor: "#030301"}}>
          <div className={"custom-container"}>
              <p className="homepage-heading mb-1 text-white tracking-tighter " >Contact Me</p>
              <p className="font-itc-avant-garde-gothic-pro text-white mb-10">or email <a className={"underline"} href={"mailto:michael@rausch.nz"}>michael@rausch.nz</a></p>


              <ContactForm></ContactForm>

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
