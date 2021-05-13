import Head from 'next/head';

import Signup from './../../components/Signup/Signup';

/*
Path : /signup
Type of interface : Viewing the registration page for user authentication with firebase.
*/

const SignupPage = () => {
  return (
    <div>
      <Head>
        <meta
          name='description'
          content='Page d"inscription à l"application web pour la recherche de restaurants évalués dans le département de Deux-Sèvres'
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
        <title>Inscription</title>
      </Head>

      <Signup />
    </div>
  );
};

export default SignupPage;
