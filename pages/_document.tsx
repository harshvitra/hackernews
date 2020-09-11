import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: import("next/document").DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="description" content="Hacker News Stories Application" />
                    <meta name="keywords" content="hacker, news, application, stories" />
                    <meta name="author" content="Harsh Vitra" />
                    <meta name="theme-color" />

                    {/* Title and Viewport are in app 
                    https://github.com/vercel/next.js/blob/master/errors/no-document-title.md
                    https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;