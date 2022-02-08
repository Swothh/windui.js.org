import '../public/css/global.css';
import Head from 'next/head';
import Header from '../components/Static/Header';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/1/1b/Warwick_W_logo.png" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic" rel="stylesheet" />
                <link href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css" rel="stylesheet" />
                <title>@windui - UI Packages</title>
            </Head>
            <main className="max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-20 lg:w-8/12 mx-auto transition-all duration-300">
                <Header />
                <Component {...pageProps} />
            </main>
        </>
    );
};