import React, { Fragment } from 'react';
import Head from 'next/head';

import Login from './../../components/Login/Login';

/*
Path : /login
Type of interface : Viewing the login page for user authentication with firebase.
*/

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <meta
          name='description'
          content='Page de connexion à l"application web pour la recherche de restaurants évalués dans le département de Deux-Sèvres'
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
        <title>Connexion</title>
      </Head>

      <Login />
    </Fragment>
  );
};

export default LoginPage;
