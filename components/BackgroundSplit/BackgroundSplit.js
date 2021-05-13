import React from 'react';

import classes from './BackgroundSplit.module.css';

/*
Type : Function Component.
Return : Allows you to set up a colour gradient in the background of a page divided into two parts. It is used for the Home page.
*/

const BackgroundSplit = props => {
  return <div className={classes.backgroundSplit}>{props.children}</div>;
};

export default BackgroundSplit;
