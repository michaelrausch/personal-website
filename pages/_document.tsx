import Document, { Html, Head, Main, NextScript } from "next/document";

import GetLDJson from '../lib/ldjson'

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <script
                        type='application/ld+json'
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(GetLDJson()) }}
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://use.typekit.net/ave4tbe.css"/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        );
    }
}
