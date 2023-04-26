import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userDetails } from "../Pages/User_Management/features/userSlice";

const rootReducer = combineReducers({
    userManagement: userDetails.reducer,
})

const store = configureStore({
    reducer: rootReducer
});

export default store;
