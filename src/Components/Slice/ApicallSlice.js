import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from '../Thunks/ApiCallthunk'

const initialState = {
  value: [],
  selected:[],
  Id:'',
  total:0,
  show:true
}

export const ApicallSlice = createSlice({
  name: 'Apicall',
  initialState,
  reducers: {
      idsetter:(state, action)=>{
        console.log(action.payload);
        state.Id= action.payload

      },
      addItem:(state,action)=>{
                 
       
         
           state.selected.push(action.payload)
           
         
           
        },
        handlebook:(state)=>{
          state.show=false
          let total =0 ;
          state.selected.forEach((ele)=>{
             total+=(ele.price)
          })
          state.total=total;
         
        },

  
  },
  extraReducers:(builder)=>{
       builder.addCase(fetchUserById.fulfilled,(state,action)=>{
           state.value=action.payload
       })
  }

})



// Action creators are generated for each case reducer function
export const {  idsetter, addItem, handlebook, } = ApicallSlice.actions

export default ApicallSlice.reducer