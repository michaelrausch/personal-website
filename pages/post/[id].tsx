import { BLOG_POSTS, getAllPostIds, getPostData } from '../../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import Layout from '../../layouts/Layout';

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
            <div className="w-full mt-20 xl:px-32">
                <img src={post.hero} className="w-full" alt="" />
            </div>
            <h1 className="pt-20 text-5xl text-center font-bold font-futura-pt">{post.title}</h1>
            <p className="text-center mt-5 font-bold font-futura-pt text-gray-300 text-xl">{post.date}</p>

            <article className="prose prose-sm lg:prose-lg xl:prose-xl prose-dark  max-w-5xl mt-10 mx-auto" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </Layout>
    )
}

export default BlogPost;