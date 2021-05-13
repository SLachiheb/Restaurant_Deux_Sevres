import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import classes from './SearchBox.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchBarActions } from './../../store/searchBar-slice';

/*
Type : Function Component.
Return : The user interface displays a search bar by restaurant name.
*/

const SearchBox = () => {
  const searchBarInputRef = useRef();

  const dispatch = useDispatch();
  const keyUphanlder = () => {
    dispatch(
      searchBarActions.updateValueSearchBar({
        value: searchBarInputRef.current.value.toLowerCase(),
      })
    );
  };

  return (
    <form className={classes.searchBox_form}>
      <div className={classes.searchBox_inputGroup}>
        <input
          className={classes.searchBox_inputGroup__input}
          type='text'
          id='search'
          placeholder='Rechercher un restaurant...'
          autoComplete='off'
          ref={searchBarInputRef}
          onKeyUp={keyUphanlder}
        />
        <label htmlFor='search' className={classes.searchBox_inputGroup__label}>
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </div>

      <div className='suggestion-list hidden'></div>
    </form>
  );
};

export default SearchBox;
