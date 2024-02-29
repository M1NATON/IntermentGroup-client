import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={'container mx-auto'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;