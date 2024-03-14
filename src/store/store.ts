import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice.ts'
import {userAPI} from "./service/userService.ts";
import {categoryAPI} from "./service/categoryService.ts";
import {productAPI} from "./service/productService.ts";
import {orderAPI} from "./service/orderService.ts";



const rootReducer = combineReducers({
    user: userReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(userAPI.middleware, categoryAPI.middleware, productAPI.middleware, orderAPI.middleware)
        )

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']