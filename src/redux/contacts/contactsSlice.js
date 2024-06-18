import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAll } from '../contacts/operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(fetchAll.pending, handlePending)
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAll.rejected, handleRejected)
    
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;       
      })
      .addCase(deleteContact.rejected, handleRejected)
  },
});


export default contactsSlice.reducer;
