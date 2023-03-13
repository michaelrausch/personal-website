import { BLOG_POSTS, getAllPostIds, getPostData } from '../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../layouts/Layout';

export const ContactPage: React.FC = ({  }) => {
    return (
        <Layout>
            <NextSeo title={"/now"}/>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-primary pt-10">/now</h1>

            <p>This page is inspired by Derek Sivers&apos;s post The /now page movement and the Now Movement. The purpose of this page is to share what I&apos;m currently focussed on, and will be updated as things change.</p>
            
            <div className="pt-14">
                <p className="homepage-heading mb-3 green-x text-4xl">What am I up to right now?</p>
                <pre>
                    - Currently at Actuality as a Software Engineer<br/>
                    - Learning GraphQL & Rust<br/>
                    - Becoming a HAM<br/>
                    - Attempting to run Nexigen Group<br/>
                    - Learning Salesforce<br/>
                </pre>
            </div>

            <div className="pt-14">
                <p className="homepage-heading mb-3 blue-x text-4xl">My stack currently is :</p>
                <pre>
                    - Go / TypeScript<br/>
                    - MySQL<br/>
                    - WebStorm<br/>
                    - Swift<br/>
                </pre>
            </div>            

        </Layout>
    )
}

export default ContactPage;