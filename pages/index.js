import React, { Fragment } from 'react';
import Head from 'next/head';

import Home from './../components/Home/Home';
import styles from './../components/Home/Home.module.css';

/*
Path : /
Type of interface : Viewing the homepage of the website.
*/

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <meta
          name='description'
          content='Présentation d"une liste de restaurants évalués par des utilisateurs situés dans le département des Deux-Sèvres.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/favicon_io/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon_io/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon_io/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/favicon_io/site.webmanifest'></link>
        <title>Bienvenue</title>
      </Head>
      <div className={styles.container}>
        <Home />
      </div>
    </Fragment>
  );
}
