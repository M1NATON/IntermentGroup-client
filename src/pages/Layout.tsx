import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import {userAPI} from "../store/service/userService.ts";
import {useAppDispatch} from "../hooks/redux.ts";
import {useEffect} from "react";
import {setUser} from "../store/reducers/userSlice.ts";
import {Toaster} from "react-hot-toast";

const Layout = () => {


    const {data, refetch} = userAPI.useProfileUserQuery()
    const dispatch = useAppDispatch()

    useEffect(() => {
        refetch()
        if(data) dispatch(setUser(data))
    }, [data]);

    return (
        <div className={'min-h-screen flex flex-col'}>
            <div className={'flex-auto text-white'}>
                <Outlet/>
            </div>
            <Footer/>
            <Toaster />
        </div>
    );
};

export default Layout;