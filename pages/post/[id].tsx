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
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-primary pt-10">{post.title}</h1>
            <p className="text-white"> <span className="text-green-300">Michael Rausch</span> / {post.date}</p>

            <div className="w-full mt-10">
                <img src={post.hero} className="w-full" alt="" />
            </div>

            <article className="prose prose-sm lg:prose-lg xl:prose-xl dark:prose-dark max-w-full mt-10" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </Layout>
    )
}

export default BlogPost;