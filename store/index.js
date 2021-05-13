import { configureStore } from '@reduxjs/toolkit';

import searchBarSlice from './searchBar-slice';

/*
Use of a redux shop for easier access to update the search bar by restaurant name. We could also have used a context.
*/

const store = configureStore({
  reducer: { searchBar: searchBarSlice.reducer },
});

export default store;
