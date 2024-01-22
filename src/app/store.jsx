import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../feautures/userDetailsSlice";

export const store = configureStore({
  reducer: {
    app:userDetail,
  },
});