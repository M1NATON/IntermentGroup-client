import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICategory} from "../../models/model.ts";


export const categoryAPI = createApi({
    tagTypes: ['Category'],
    reducerPath: 'CategoryAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9005'}),
    endpoints: (build) => ({
        fetchCategoryALL: build.query<ICategory[], void>({
            query: () => ({
                url: '/categories',
            }),
            providesTags: ['Category']
        })
    })
})