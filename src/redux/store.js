import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { listenerMiddleware } from "../middlewares/middleware";

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

const userState = JSON.parse(localStorage.getItem("user") || "null"||"");
  console.log(userState)
  
export const store = configureStore({
    preloadstate:{
        user: userState == null ? {user : initialState}:  userState
    },
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware
  ]
});


