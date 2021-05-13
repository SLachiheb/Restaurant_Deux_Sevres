import firebase from './firebase';

export const createUser = (uid, data) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set({ uid, ...data })
    .then(() => console.log('Add Success'))
    .catch(error => console.log(error));
};
