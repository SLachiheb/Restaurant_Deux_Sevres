// /api/new-rating
// POST /api/new-rating
import { delBasePath } from 'next/dist/next-server/lib/router/router';
import firebase from '../../../lib/firebase';

/*
Path : /api/new-rating
Type of interface : Allows you to send data about the rating of a restaurant to the firebase database. This query is launched from the path /[restaurant]
*/

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    await firebase.firestore().collection('reviews').add({
      rating: data.rating,
      restaurant: data.restaurant,
    });

    if (res.status < 300) {
      refreshData();
    }

    res.status(201).json({ message: 'Reviews inserted!' });
  }
};

export default handler;
