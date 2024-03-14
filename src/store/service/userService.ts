import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../../models/model.ts";



export const userAPI = createApi({
    tagTypes: ['User'],
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9005/auth'}),
    endpoints: (build) => ({
        registrationUser: build.mutation<IUser, IUser>({
            query: (user: IUser) => ({
                url: '/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        loginUser: build.mutation<IUser, IUser>({
            query: (user: IUser) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        profileUser: build.query<IUser, void>({
            query: () => ({
                url: '/profile',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }),

        })
    })
})