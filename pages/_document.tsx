import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}