import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [],
  myOrders: [],
  shippingInfo: {},

}


const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    GET_ORDERS: (state, action) => {
      state.orders = action.payload.orders
    },
    GET_MY_ORDERS: (state, action) => {
      state.myOrders = action.payload.myOrders
    },

    // CRAETE_ORDER: (state, action) => {
      
    // },
    SAVE_SHIPPING_INFO: (state, action) => {
      state.shippingInfo = action.payload; // Save the shipping information
      localStorage.setItem('shippingInfo', JSON.stringify(action.payload)); // Save in localStorage
    },
    


  }
});

export const { GET_ORDERS, SAVE_SHIPPING_INFO, GET_MY_ORDERS } = orderSlice.actions;
export const selectOrders = (state) => state.order.orders;
export const selectMyOrders = (state) => state.order.myOrders;

export const selectShippingInfo = (state) => state.order.shippingInfo; // Selector for shipping information



export default orderSlice.reducer
