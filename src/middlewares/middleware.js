import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addUser, changeEmail, deleteUsers } from "../redux/userSlice";



export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addUser, changeEmail),
  effect: (action, listenerApi) =>{
      localStorage.setItem(
        "userMiddleware",
        JSON.stringify((listenerApi.getState()).user)
      )
  }
});