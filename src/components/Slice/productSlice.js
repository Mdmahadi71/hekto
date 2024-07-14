import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: 0
    // localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addtoCart:(state , action) => {
      console.log(action);
    },
      // let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
      // if(findProduct !== -1){
      //   state.cartItem[findProduct] .qun += 1
      //   localStorage.setItem('cart',JSON.stringify(state.cartItem))
      // }else{
      //   state.cartItem = [...state.cartItem , action.payload]
      //   localStorage.setItem('cart',JSON.stringify(state.cartItem))
       
      // }
     
     
     
     
    // AddtoCart: (state,action) => {
    //   let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
    //   if(findProduct !== 1){
    //     state.cartItem[findProduct] .qun+=1
    //     localStorage.setItem('cart',JSON.stringify(state.cartItem))
    //   }else{
    //     state.cartItem = [...state.cartItem , action.payload] 
    //     localStorage.setItem('cart',JSON.stringify(state.cartItem))
    //   }
    //   console.log(AddtoCart);
    // },
   
    // productIncr: (state,action) => {
    //   state.cartItem[findProduct] .qun+=1
    //   localStorage.setItem('cart',JSON.stringify(state.cartItem))
    // },
    // prooductDecr: (state,action) => {
    //   if(state.cartItem[findProduct] .qun >1){
    //     state.cartItem[findProduct] .qun-=1
    //     localStorage.setItem('cart',JSON.stringify(state.cartItem))
    //   }
      
    // },
    // productremove:(state,action)=>{
    //   state.cartItem[findProduct ,1]
    //   localStorage.setItem('cart',JSON.stringify(state.cartItem))
    // }
    
  },
  
})



export const {AddtoCart,productIncr,productremove,prooductDecr} = productSlice.actions

export default productSlice.reducer