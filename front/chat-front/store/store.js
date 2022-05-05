import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from "../redux/slice";
import meReducer from "../redux/meSlice";
import actionReducer from "../redux/actions"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    me: meReducer,
    actions: actionReducer
  },
})
