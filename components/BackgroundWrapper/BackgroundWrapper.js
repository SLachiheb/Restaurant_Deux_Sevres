import React from 'react';

import classes from './BackgroundWrapper.module.css';

/*
Type : Function Component.
Return : Allows you to set up a colour gradient in the background of a page.
*/

const BackgroundWrapper = props => {
  return <div className={classes.backgroundWrapper}>{props.children}</div>;
};

export default BackgroundWrapper;
