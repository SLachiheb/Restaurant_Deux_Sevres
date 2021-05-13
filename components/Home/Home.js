import React from 'react';
import classes from './Home.module.css';
import { useRouter } from 'next/router';

/*
Type : Function Component.
Return : The user interface for the Home page with a redirect button to the restaurants page if the user is logged in.
*/

const Home = () => {
  const router = useRouter();

  const searchHandler = () => {
    router.push(`/restaurants`);
  };

  return (
    <div className={classes.home_background}>
      <div className={classes.home_container}>
        <div className={classes.home_items__left}>
          <div className={classes.home_img_p}>
            <h1>
              Vos restaurants préférés dans les Deux-Sèvres, localisés en un
              clic !
            </h1>
          </div>
          <button className={classes.home_button} onClick={searchHandler}>
            Rechercher
          </button>
        </div>
        <div className={classes.home_items__right}>
          <div className={classes.home_container_glass}>
            <img src='/images/vegetables.png' alt='vegetables_image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
