import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = `https://nany-servise-default-rtdb.europe-west1.firebasedatabase.app`;

export const getAllNanies = createAsyncThunk('/nanies', async (_, thunkAPI) => {
  //   try {
  //     const response = await axios.get(`/nanies`);
  //     console.log(response.resource);
  //     return response.resource;
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
});
