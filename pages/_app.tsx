import React from 'react';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default MyApp;
