import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// define a service user a base URL

const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3200",
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),

        UsersList: builder.mutation({
            query: (fetchUsers) => ({
                url: "/UsersList",
                method: "GET",
                
        }),
        // UsersList: builder.query({
        //     query:()=>"UsersList",
        }),
    
}),
});

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation,useUsersListMutation } = appApi;


export default appApi;
