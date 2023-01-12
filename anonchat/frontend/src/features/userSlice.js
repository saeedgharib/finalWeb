import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import appApi from "../services/appApi";
import axios from "axios";

export const initialState={
    loading:false,
    users:[],
    error:'',

}
export const fetchUsers = createAsyncThunk('/UsersList',async()=>{
    return axios.get('http://localhost:3000/')
    .then((response)=>response.data)
})

export const userSlice = createSlice({
    name: "user",
    initialState: null,
    // reducers: {
    //     reset: () => initialState
    // },
    reducers: {
        reset: () => initialState,
        addNotifications: (state, { payload }) => {
            if (state.newMessages[payload]) {
                state.newMessages[payload] = state.newMessages[payload] + 1;
            } else {
                state.newMessages[payload] = 1;
            }
        },
        resetNotifications: (state, { payload }) => {
            delete state.newMessages[payload];
        },
    },

    extraReducers: (builder) => {
        // builder.addCase(fetchUsers.pending, state => {
        //     state.loading = true
        //   })
        //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.users = action.payload
        //     state.error = ''
        //   })
        //   builder.addCase(fetchUsers.rejected, (state, action) => {
        //     state.loading = false
        //     state.users = []
        //     state.error = action.error.message
        //   })
        // save user after signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload);
        // save user after login
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => payload);
        // logout: destroy user session
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, (state) => initialState);
        // getUsers
        
        
        
    },
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
