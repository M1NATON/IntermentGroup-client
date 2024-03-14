import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IOrder} from "../../models/model.ts";


export const orderAPI = createApi({
    tagTypes: ['Order'],
    reducerPath: 'OrderAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9005/'}),
    endpoints: (build) => ({
        createOrder: build.mutation<IOrder, IOrder>({
            query: (body) => ({
                url: '/orders',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Order']
        }),
        fetchOrderUser: build.query({
            query: (userId) => ({
                url: `/orders/user/${userId}`
            }),
            providesTags: ['Order']
        })
    })
})