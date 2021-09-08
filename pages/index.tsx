import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { BLOG_POSTS, getAllPosts } from '../lib/PostLoader'
import Layout from '../layouts/Layout';
import React from 'react';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllPosts(BLOG_POSTS);

  return {
    props: {
      posts,
    }
  }
}

interface Props {
  posts: [any]
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <NextSeo title="Home" />

      <div className="my-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-futura-pt-bold">Hi, I&apos;m Michael ✍️</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl max-w-3xl font-thin pt-5 font-futura-pt">This is an intro about my blog website this should be a couple of sentences long</p>

      </div>

      {posts.map((post, i) => {
        return <article key={i} className="mb-14 ">
          <Link href={"/post/" + post.id} scroll={false}>
            <div className="max-w-2xl cursor-pointer">
              <h2 className="text-3xl  font-sourcecode font-bold text-green-500  ">{post.title}</h2>
              <p className="text-sm my-1 font-sourcecode">{post.date} - {post.tags}</p>
              <p className="text-base my-2 ">{post.description}</p>
              <a className="text-base underline hover:text-gray-100 dark:hover:text-gray-100 transition-colors">Read More</a>
            </div>
          </Link>
        </article>
      })}

    </Layout>
  )
}

export default Home;