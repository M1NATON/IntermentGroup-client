import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

const Layout = () => {
    return (
        <div className={'min-h-screen flex flex-col'}>
            <div className={'flex-auto text-white'}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;