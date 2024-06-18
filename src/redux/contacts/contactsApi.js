import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAll = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
    const { data } = await axios.get('/contacts');
    console.log('Fetched contacts:', data);
        return data; 
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
) 


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            //alert('Create contact')
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
); 

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            //alert('Delete contact')
            return data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/* export const updateContact = createAsyncThunk(
    "contacts/updateContact",
    async ({ id, updates }, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, updates);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
); */