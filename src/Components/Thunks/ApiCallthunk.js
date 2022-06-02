import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


// First, create the thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async  () => {
    const response = await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman')
    return response.data.Search
  }
)


