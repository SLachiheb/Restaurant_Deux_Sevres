import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import classes from './Restaurants.module.css';
import NavBar from '../NavBar/NavBar';
import CardList from '../CardList/CardList';

/*
Type : Function Component.
Return : The user interface for viewing all restaurants in the firebase database. You can view the name, image and rating of the restaurant. There is a dynamic redirection to a more detailed page about the restaurant.
*/

const Restaurants = props => {
  const valueSearchBar = useSelector(state => state.searchBar.valueSearchBar);

  const filterRestaurant = props.restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(valueSearchBar);
  });

  return (
    <Fragment>
      <div className={classes.restaurant_background}>
        <div className={classes.restaurants_background_navbar}>
          <NavBar />
        </div>
        <div className={classes.restaurant_background_card}>
          {filterRestaurant.length !== 0 ? (
            <CardList restaurantList={filterRestaurant} />
          ) : (
            <div className={classes.noResults}>
              <p>Aucun résultat</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Restaurants;
