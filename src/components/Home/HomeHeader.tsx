import video from '../../assets/home/header_fhd.mp4'
import mainLogo from '../../assets/home/main_logo.svg'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux.ts";
const HomeHeader = () => {

    const {isAuth} = useAppSelector(state => state.user)


    return (
        <div className={'h-screen w-full overflow-hidden relative z-10 text-white'}>
            <div
                className="container py-12 z-40  mx-auto flex justify-between items-center absolute top-0 left-0 right-0">
                <nav id="nav">
                    <ul className={'flex gap-10 text-xl'}>
                        <li><NavLink to={'/'}>Главная</NavLink></li>
                        <li><NavLink to={'/products'}>Продукация</NavLink></li>
                        <li><NavLink to={'/handbooks'}>Справочники и ГОСТы</NavLink></li>
                        <li><NavLink to={'/documents'}>Документы</NavLink></li>
                        <li><NavLink to={'/payment'}>Оплата, возврат, обмен</NavLink></li>
                        <li><NavLink to={'/requisites'}>Реквизиты</NavLink></li>
                    </ul>
                </nav>
                <div className={'text-2xl'}>
                    {
                        isAuth ? <NavLink to={'/profile'}>Профиль</NavLink> :  <NavLink to={'/authorization'}>Авторизоваться</NavLink>
                    }
                </div>
            </div>

            <div className={'-z-10 opacity-[0.65]  bg-[#1A2A42] absolute left-0 top-0 right-0 bottom-0'}></div>
            <div className={'text-white flex gap-20 items-center w-[40%] mx-auto mt-[20%] mb-[150px]'}>
                <img src={mainLogo} alt=""/>
                <div>
                    <h1 className={'text-[73px] font-[700] leading-[80px]'}>Все виды
                        металлопроката</h1>
                    <p className={'text-[24px]'}>ОТ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ</p>
                </div>
            </div>
            <video autoPlay={true} src={video} loop={true} muted={true}
                   className={'-z-20 absolute left-0 top-0 right-0 bottom-0'}></video>
        </div>
    );
};

export default HomeHeader;