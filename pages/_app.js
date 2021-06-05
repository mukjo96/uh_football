import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";
import { wrapper } from "../redux/configureStore";
import Foot from "@features/common/footer/foot";
import NavBar from "@features/navigation/navBar";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <>
            <Head>
                <title>Football Information Unofficial Site</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Foot />
        </>
    );
}

export default wrapper.withRedux(MyApp);
