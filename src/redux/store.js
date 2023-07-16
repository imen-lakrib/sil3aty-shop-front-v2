import {configureStore, combineReducers} from "@reduxjs/toolkit"


// import reducers, 
import cartReducer from "./slices/cartSlice"
import orderReducer from "./slices/orderSlice"
import productReducer from "./slices/productSlice"
import userReducer from "./slices/userSlice"
import wishListReducer from "./slices/wishListSlice"
import filterReducer from "./slices/filterSlice"
import characteristicReducer from "./slices/characteristicSlice"

// reducers,
//here all the reducers:
const rootReducer = combineReducers({
    //name: value
    cart: cartReducer,
    characteristic: characteristicReducer,
    order: orderReducer,
    product: productReducer,
    user: userReducer,
    wishList: wishListReducer,
    filter: filterReducer,

   
})

// the store:
const store = configureStore({
    reducer: rootReducer,

})

export default store