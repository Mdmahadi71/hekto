import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: 0,
  },
  reducers: {
    AddtoCart: (state,action) => {
      console.log(action);
    },
 
    
  },
})


export const {AddtoCart} = productSlice.actions

export default productSlice.reducer