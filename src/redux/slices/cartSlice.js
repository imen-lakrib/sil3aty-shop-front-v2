import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // we gonne save it in local storage to keep the data when we refresh the page
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  totalItemsPrice: 0


}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    GET_CART_DATA: (state, action) => {
      state.cartItems = action.payload;
    },
    ADD_TO_CART: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === newItem.productId
      );
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity = newItem.quantity + 1;
      } else {
        // Otherwise, add the new item to the cart
        state.cartItems.push(newItem);
      }
      // Save cart items to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    UPDATE_CART: (state, action) => {
      const update = action.payload;
      const updateditem = state.cartItems.find(
        (item) => item.productId === update.productId
      );
      if (updateditem) {
        // If the item is already in the cart, update its quantity
        updateditem.quantity = update.quantity;
      }
      // Save cart items to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    TOTAL_ITEMS_PRICE: (state, action) => {
      state.totalItemsPrice = action.payload;

    },
    CLEAR_CART: (state) => {
      state.cartItems = [];
      state.totalItemsPrice = 0;
    },



  }
});

// here we export the actions :
export const { GET_CART_DATA, ADD_TO_CART, UPDATE_CART, TOTAL_ITEMS_PRICE, CLEAR_CART } = cartSlice.actions
// here we export the variables (which are the states)
export const selectTotalItemsPrice = (state) => state.cart.totalItemsPrice;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer
