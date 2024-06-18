import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;



export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterName],
    (contacts, filter) => {
        
        return contacts.filter(contact=> contact.name.toLowerCase().
        includes(filter.toLowerCase()))
      
        }
    );
