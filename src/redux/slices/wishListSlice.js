import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlistItems: []
  

}


const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    STORE_WISHLIST_ITEMS:(state, action)=>{
      state.wishlistItems = action.payload

  },
    ADD_TO_WISHLIST: (state, action) => {


      const newItem = action.payload;
      const existingItem = state.wishlistItems.find(
        (item) => item.productId === newItem.productId
      );
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        console.log("iteam already existing")
      } else {
        // Otherwise, add the new item to the cart
        state.wishlistItems.push(newItem);
      }
      // Save cart items to local storage
      localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      const productId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(product => product._id !== productId);

    },
    

  }
});

export const {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  STORE_WISHLIST_ITEMS

} = wishListSlice.actions;


export const selectWishlist = (state) => state.wishList.wishlistItems
;



export default wishListSlice.reducer
