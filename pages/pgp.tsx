import { BLOG_POSTS, getAllPostIds, getPostData } from '../lib/PostLoader'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../layouts/Layout';

export const ContactPage: React.FC = ({  }) => {
    return (
        <Layout>
            <NextSeo title={""}/>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-primary pt-10">{}</h1>

            <div className="pt-5">
                <p className="homepage-heading mb-3 green-x">Email </p>
                <a href="mailto:michael@rausch.nz" className="homepage-heading mb-10 text-3xl ">michael@rausch.nz</a>
            </div>

            <div className="pt-24">
                <p className="homepage-heading mb-9 blue-x">PGP Key </p>
                <pre className="homepage-heading mb-10 text-xl whitespace-pre line">
                -----BEGIN PGP PUBLIC KEY BLOCK----- <br/>
                    xjMEY5ancRYJKwYBBAHaRw8BAQdACDUUAnHWRSKBvte/YgTEEgI0RQXXmrvL<br/>
                    bYOjAq9NoTrNJW1pY2hhZWxAcmF1c2NoLm56IDxtaWNoYWVsQHJhdXNjaC5u<br/>
                    ej7CiwQQFgoAPgUCY5ancQQLCQcICRAO4OIjyGo7iAMVCAoEFgACAQIZAQIb<br/>
                    AwIeARYhBCneF4PoNytHaDQY8g7g4iPIajuIAAA6AAEA7Jd1s30ssq+ZXPio<br/>
                    bIHu1Bq2SAIjXVBZRB+IhnIKxvAA9Al9O3KB4IOsfNCWxRoC6csRRCNJCGjh<br/>
                    SHSqIQcLkADOOARjlqdxEgorBgEEAZdVAQUBAQdA2vRlbHfPCivKtyjvgYjP<br/>
                    1qa5UKtzTHYrmR2QZIeppjwDAQgHwngEGBYIACoFAmOWp3EJEA7g4iPIajuI<br/>
                    AhsMFiEEKd4Xg+g3K0doNBjyDuDiI8hqO4gAAEKQAP9YjKPAwwYiZEZTYpjA<br/>
                    QD7RrhI6TxrCydKXTL3Xnn0Z7wEAlxK1QV1EnUvEQkK591oD0f3huLSRKKJK<br/>
                    HqVAHMGjdQ4=<br/>
                    =faWR<br/>
                -----END PGP PUBLIC KEY BLOCK-----

                </pre>
            </div>



            <div className="w-full mt-10 h-72 bg-center bg-cover	" style={{backgroundImage: 'url("' + "" + '")'}}>
            </div>

            

        </Layout>
    )
}

export default ContactPage;