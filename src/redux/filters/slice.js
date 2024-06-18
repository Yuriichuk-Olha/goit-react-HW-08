import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: '',
        },
    reducers: {
        changeFilter: (state, action) => {
  ///         console.log(action.payload)
            state.name = action.payload;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;