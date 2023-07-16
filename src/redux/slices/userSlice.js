import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isLoggedIn: false,
  email: null,
  userID: null,
  users: [],

}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      const { email, userID, token } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userID = userID;
      state.token = token;
    },

    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userID = null;
      state.token = null;

    },
    GET_USERS: (state, action) => {
      state.users = action.payload.users
    },


  }
});


export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER, GET_USERS} = userSlice.actions
export const selectIsLoggedIn= (state)=> state.user.isLoggedIn
export const selectEmail= (state)=> state.user.email
export const selectUserID= (state)=> state.user.userID
export const selectToken= (state)=> state.user.token
export const selectUsers = (state) => state.user.users




export default userSlice.reducer
