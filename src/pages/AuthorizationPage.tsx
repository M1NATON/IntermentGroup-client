import Header from "../components/Header.tsx";
import React, {useEffect, useState} from "react";
import {userAPI} from "../store/service/userService.ts";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {setAccessToken, setUser} from "../store/reducers/userSlice.ts";
import {useNavigate} from "react-router-dom";
import MyInput from "../ui/MyInput.tsx";




const AuthorizationPage = () => {
    const [buttonState, setButtonState] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [registrUser] = userAPI.useRegistrationUserMutation()
    const [loginUser, {data:LoginData}] = userAPI.useLoginUserMutation()
    const {data: UserData, refetch} = userAPI.useProfileUserQuery()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {isToken} = useAppSelector(state => state.user)

    useEffect(() => {
        if(LoginData && LoginData.token){
            localStorage.setItem('token', LoginData.token)
            dispatch(setAccessToken(LoginData.token))
        }
    }, [LoginData, dispatch])

    // useEffect(() => {
    //     refetch()
    //     if(UserData) dispatch(setUser(UserData))
    // }, [UserData]);

    useEffect(() => {
        if(isToken) refetch()
    }, [isToken]);

    const registrHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        await registrUser({
            email: email,
            password: password
        })
        setButtonState(false)

    }


    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        await loginUser({
            email: email,
            password: password
        })
        await refetch()
        navigate('/profile')
    }


    return (
        <div>
            <Header/>
            <div className={'text-[#1A2A42] w-full'}>
                <div className="container">
                    <h1 className={'text-4xl text-center mt-5'}>Авторизация</h1>
                    <div className={' p-5'}>
                        <form  className={' mb-40 w-1/2 mx-auto flex flex-col bg-[#f1f5f8] py-[30px] rounded-xl'}>
                            <div className={'w-fit mx-auto flex flex-col'}>
                                <label htmlFor="" className={'text-xl'}>Введите почту</label>
                                <MyInput placeholder={'Email'}
                                         onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className={'w-fit mx-auto flex flex-col'}>
                                <label htmlFor="" className={'text-xl'}>Введите пароль</label>
                                <MyInput
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={'Password'} type="password"
                                />
                            </div>
                            {
                                buttonState ? (
                                    <div className={'w-full text-center'}>
                                        <input
                                            onClick={registrHandler}
                                            type="submit" value={'Зарегистрироватся'}
                                               className={'mt-10 mb-2 cursor-pointer bg-sky-600 w-fit px-10 py-2 text-white rounded-xl mx-auto'}/>
                                        <p
                                            onClick={() => setButtonState(false)}
                                            className={'text-[12px] text-gray-400 cursor-pointer text-center'}
                                        >
                                            Есть аккаунта? Войдите
                                        </p>
                                    </div>
                                )
                                    : (
                                        <div className={'w-full text-center'}>
                                            <input type="submit" value={'Войти'}
                                                   onClick={loginHandler}
                                                   className={'mt-10 mb-2 cursor-pointer bg-sky-600 w-fit px-10 py-2 text-white rounded-xl mx-auto'}/>
                                            <p
                                                onClick={() => setButtonState(true)}
                                                className={'text-[12px] text-gray-400 cursor-pointer text-center'}
                                            >
                                                Нет аккаунта? Зарегистрируйтесь
                                            </p>
                                        </div>
                                    )
                            }

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthorizationPage;