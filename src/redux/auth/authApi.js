import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL='https://connections-api.herokuapp.com/'

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

//const clearAuthHeader = () = {
//    axios.defaults.headers.common.Authorization = ''
//};

export const register = createAsyncThunk(
    'auth/register',
    async (newUser, thunkAPI) => {
      console.log(newUser)
      try {
        const res = await axios.post(
          '/users/signup', newUser);
        setAuthHeader(res.data.token);
      //console.log(res.data)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      } 
    }
  );


  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  export const logOut = createAsyncThunk('auth/logout',
   async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      axios.defaults.headers.common.Authorization = ''
      //clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  
  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );









/* const phonebookApi = axios.create({
  baseURL: 'https://637785ab81a568fc2518138f.mockapi.io/api',
});  */

/* axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
 */

/* export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
  const { data } = await axios.get('/contacts');
    return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)  */

/* export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
  const { data } = await phonebookApi.get('/contacts');
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); */

/* export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      alert('Create contact')
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); */

/* export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await phonebookApi.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); */

/* export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      alert('Delete contact')
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); */

/* export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await phonebookApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); */













/*  export const getContacts = createAsyncThunk(
    'contacts/fetchAll',
      async (_, thunkAPI) => {
  try {
      const response = await axios.get('/contacts');
  console.log(response.data)
      return response.data;
  } catch (error) {
  return thunkAPI.rejectWithValue(error.message)
  }
}) */

/* export const createContact = createAsyncThunk(
    'contacts/createContact', 
      async (contact, thunkAPI) => {
try {
      const response = await axios.post('/contacts',contact);
      alert('Create contact')
  return response.data;
} catch (error) {
  return thunkAPI.rejectWithValue(error.message)
}
})

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', 
        async (contactId, thunkAPI) => {
try {
      const response = await axios.delete(`/contacts/${contactId}`);
      alert('Delete contact')
  return response.data;
} catch (error) {
  return thunkAPI.rejectWithValue(error.message)
}
}) */