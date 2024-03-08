import { createSlice } from "@reduxjs/toolkit";

import {users} from '../../api/users/data.json'

const initialState={
    id: 0,
    email: "",
    login:false,
    first_name: null,
    last_name: null,
    avatar: "",
    password: "",
    movies :[]
  }



export const userSlice = createSlice({
    
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id,first_name, last_name, email,password,login,avatar,movies } = action.payload;
      state.id=id
      state.email = email;
      state.first_name = first_name;
      state.last_name = last_name;
      state.password = password;
      state.login=login
      state.avatar=avatar
      state.movies=movies
      localStorage.setItem('user', JSON.stringify(state));
           
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    deleteUsers: (state) => {
        state = initialState
        localStorage.removeItem('user');
        
    }
  },
});

export const { addUser, changeEmail, deleteUsers } = userSlice.actions;

export default userSlice.reducer;
