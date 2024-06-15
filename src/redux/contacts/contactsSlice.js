import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from '../contacts/contactsApi';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAll.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchAll.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      });
  },
});


export default contactsSlice.reducer;
