import React from 'react';
import { useRouter } from 'next/router';

import classes from './CardItem.module.css';

/*
Type : Function Component.
Return : It is used with the CardList component and returns a presentation of the restaurant as a card. This card presents a redirection to a more detailed page of the restaurant.
*/

const CardItem = props => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(
      `/${props.restaurant.id}?rating=${props.restaurant.rating}&nbRatings=${props.restaurant.nbRatings}`
    );
  };

  return (
    <div className={classes.card_hero} onClick={showDetailsHandler}>
      <div className={classes.card_img}>
        <img
          src={props.restaurant.images[0]}
          alt={`image_${props.restaurant.name}`}
        />
      </div>
      <div className={classes.card_body}>
        <p>{props.restaurant.name}</p>
        <p className={classes.card_rating}>
          <span>{props.restaurant.rating}</span> ({props.restaurant.nbRatings})
        </p>
      </div>
    </div>
  );
};

export default CardItem;
