import React from 'react';

import classes from './CardList.module.css';
import CardItem from '../CardItem/CardItem';

/*
Type : Function Component.
Return : a set of restaurant cards. It is used to list the restaurants in the restaurant page.
*/

const CardList = props => {
  return (
    <div className={classes.center}>
      <div className={classes.cardList_container}>
        {props.restaurantList.map(restaurant => {
          return <CardItem key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
