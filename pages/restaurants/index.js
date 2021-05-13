import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';

import firebase from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import Restaurants from '../../components/Restaurants/Restaurants';

/*
Path : /restaurants
Type of interface : Visualisation of the restaurant page with the list of restaurants in the Deux-Sèvres. The route /restaurants is protected.
*/

const RestaurantPage = props => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();

  if (!currentUser && !loading) {
    // redirect to index
    router.push('/login');
  }

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
        <title>Restaurants Deux-Sèvres</title>
      </Head>
      {!currentUser ? null : <Restaurants restaurants={props.restaurants} />}
    </Fragment>
  );
};

// export const getStaticProps = async () => {
//   const db = firebase.firestore();
//   const restaurants = await new Promise((resolve, reject) => {
//     db.collection('restaurants')
//       .orderBy('name')
//       .get()
//       .then(querySnapshot => {
//         let data = [];
//         querySnapshot.forEach(doc => {
//           data.push(
//             Object.assign(
//               {
//                 id: doc.id,
//               },
//               doc.data()
//             )
//           );
//           resolve(data);
//         });
//       })
//       .catch(err => reject([]));
//   });

//   return {
//     props: {
//       restaurants,
//     },
//     revalidate: 1,
//   };
// };

export default RestaurantPage;

export const getServerSideProps = async context => {
  //fetch data for a single meetup
  const db = firebase.firestore();
  const restaurants = await db.collection('restaurants').get();

  const restaurantsData = restaurants.docs.map(restaurant => {
    return { id: restaurant.id, data: restaurant.data() };
  });

  const list = [];
  for (const restaurant of restaurantsData) {
    const reviews = await db
      .collection('reviews')
      .where('restaurant', '==', restaurant.id)
      .get();

    let ratings = reviews.docs.map(docReview => {
      return +docReview.data().rating;
    });

    const rating =
      ratings.reduce((acc, currentValue) => acc + currentValue, 0) /
        ratings.length || 0;

    list.push({
      id: restaurant.id,
      ...restaurant.data,
      rating: rating.toFixed(1),
      nbRatings: ratings.length,
    });
  }

  // if (doc.exists) {
  //   restaurant = doc.data();
  // }

  return {
    props: {
      restaurants: list,
    },
  };
};
