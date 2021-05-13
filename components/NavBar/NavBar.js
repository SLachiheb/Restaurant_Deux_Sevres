import React from 'react';
import { useRouter } from 'next/router';

import classes from './NavBar.module.css';
import SearchBox from './../SearchBox/SearchBox';
import { useAuth } from './../../contexts/AuthContext';

/*
Type : Function Component.
Return : A navigation bar consisting of a search bar by restaurant name and a logout button with redirection to the login page. There is also the possibility to place a logo.
*/

const Navbar = () => {
  const { logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push('/login');
  }

  return (
    <div className={classes.navbar_container}>
      <div className={classes.navbar_logo}>
        <p></p>
      </div>
      <div className={classes.navbar_searchBox}>
        <SearchBox />
      </div>
      <div className={classes.navbar_logout}>
        <button onClick={handleLogout}>Déconnexion</button>
      </div>
    </div>
  );
};

export default Navbar;
