import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {IUser} from "../../models/model.ts";





interface UserState {
    user: IUser | null
    isToken: string | null
    isAuth: boolean
}

const initialState:UserState = {
    user: null,
    isAuth: false,
    isToken: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
        },
        setAccessToken : (state, action:PayloadAction<string>) => {
            state.isToken = action.payload
        },
        logout: (state) => {
            state.user = null
            state.isAuth = false
            state.isToken = null
            localStorage.removeItem('token')
        }
    }
})

export const { setUser, setAccessToken, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user
export const selectIsAuth = (state: RootState) => state.user.isAuth

export default userSlice.reducer