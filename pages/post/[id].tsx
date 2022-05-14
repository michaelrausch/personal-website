import { BLOG_POSTS, getAllPostIds, getPostData } from '../../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import Layout from '../../layouts/Layout';
import { NextSeo } from 'next-seo';

interface Params {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as any;
    const post = await getPostData(BLOG_POSTS, id as string);

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds(BLOG_POSTS);

    return {
        paths,
        fallback: false,
    }
}

interface Props {
    post: any
}

export const BlogPost: React.FC<Props> = ({ post }) => {
    return (
        <Layout>
            <NextSeo title={post.title}/>

            <h1 className="font-black text-4xl md:text-6xl tracking-tight mb-4 md:mb-2  pt-10 font-futura-pt-bold ">{post.title}</h1>
            <p className="text-gray-200 font-medium">Michael Rausch / {post.date}</p>

            <div className="w-full mt-10 h-72 bg-center bg-cover rounded" style={{backgroundImage: 'url("' + post.hero + '")'}}>
            </div>

            <article className="prose prose-sm lg:prose-lg xl:prose-xl dark:prose-dark max-w-full mt-10 " dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        </Layout>
    )
}

export default BlogPost;