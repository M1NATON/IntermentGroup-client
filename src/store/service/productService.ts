import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../models/model.ts";


export const productAPI = createApi({
    tagTypes: ['Product'],
    reducerPath: 'Product',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9005/'}),
    endpoints: (build) => ({
        fetchProductCategory: build.query<IProduct[], number>({
            query:(categoryId) => ({
                url: `/products/category/${categoryId}`
            }),
            providesTags: ['Product']
        })
    })
})