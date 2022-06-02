import { configureStore } from '@reduxjs/toolkit'
import ApicallReducer from '../Slice/ApicallSlice'

export const store = configureStore({
  reducer: {
          movie:ApicallReducer
  },
})