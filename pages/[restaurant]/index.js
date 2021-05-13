import React, { Fragment } from 'react';
import Head from 'next/head';

import firebase from './../../lib/firebase';
import RestaurantDetails from './../../components/RestaurantDetails/RestaurantDetails';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';

/*
Path : /[restaurant]?rating=value&nbRatings=value
Type of interface : Viewing the detailed page of a restaurant. The route /[restaurant]?rating=value&nbRatings=value is protected.
*/

const RestaurantDetailsPage = props => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  if (!currentUser && !loading) {
    // redirect to index
    router.push('/login');
  }

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <Fragment>
      {!currentUser ? null : (
        <Fragment>
          <Head>
            <meta name='description' content={props.restaurant.description} />
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
            <link
              rel='manifest'
              href='/images/favicon_io/site.webmanifest'
            ></link>
            <title>{props.restaurant.name}</title>
          </Head>
          <RestaurantDetails restaurant={props.restaurant} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default RestaurantDetailsPage;

// export const getStaticPaths = async () => {
//   // search ID
//   const db = firebase.firestore();
//   const restaurants = await db.collection('restaurants').get();
//   const restaurantsID = restaurants.docs.map(doc => {
//     return { params: { restaurant: doc.id.toString() } };
//   });

//   return {
//     fallback: 'blocking',
//     paths: restaurantsID,
//   };
// };

export const getServerSideProps = async context => {
  //fetch data for a single meetup
  const db = firebase.firestore();
  const restaurantID = context.params.restaurant;
  const doc = await db.collection('restaurants').doc(restaurantID).get();

  let restaurant = [];
  if (doc.exists) {
    restaurant = doc.data();
  }

  return {
    props: {
      restaurant: {
        id: restaurantID,
        ...restaurant,
      },
    },
  };
};
