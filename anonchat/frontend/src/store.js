import { configureStore } from "@reduxjs/toolkit";
import userSlice, { initialState } from "./features/userSlice";
import appApi from "./services/appApi";

// persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { createStoreHook } from "react-redux";

// reducers
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath],
};

// persist our store

const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
})


export default store;
