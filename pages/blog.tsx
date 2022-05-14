import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import React, { ReactNode } from 'react';

import { BLOG_POSTS, getAllPosts } from '../lib/PostLoader'

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (context) => {
  var posts = getAllPosts(BLOG_POSTS);

  posts = posts.slice(0, 3)

  return {
    props: {
      posts,
    }
  }
}


const Blog: React.FC<Props> = ({ posts, children }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div>
      <NextSeo title="Blog" />

      <div className="bg-gray-50 dark:bg-gray-900  ">
        <Navbar />

        <motion.main
          variants={variants} // Pass the variant object into Framer Motion 
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          transition={{ type: 'linear' }} // Set the transition to linear
          className="container mx-auto text-white px-10 md:px-42 xl:px-80 pb-24">

          <p className="homepage-heading my-10">Blog</p>


          <div className="grid grid-cols-2 gap-8">
            {posts.map((post, key) => {
              return (
                <Link href={"/post/" + post.id} key={key} >
                  <motion.a whileHover={{scale: 1.05}} className="w-full  rounded-md mb-10 cursor-pointer">
                    <div className="pt-5 rounded-md h-96 w-full bg-red-200 bg-cover" style={{backgroundImage: "url(" + post.hero + ")"}}></div>
                    <p className="my-2 text-gray-300 font-medium">{post.date}</p>
                    <h2 className="text-4xl font-bold">{post.title}</h2>
                  </motion.a>
                </Link>)
            })}
          </div>


        </motion.main>

        <Footer></Footer>
      </div>

    </div>
  )
}

interface Props {
  posts: [any]
  children?: ReactNode
}

export default Blog;