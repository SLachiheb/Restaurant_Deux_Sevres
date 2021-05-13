import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: { valueSearchBar: '' },
  reducers: {
    updateValueSearchBar(state, action) {
      state.valueSearchBar = action.payload.value;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;
export default searchBarSlice;
