import {NavLink} from "react-router-dom";
import background from '../assets/home/page_bg_header.png'


const Header = () => {


    
    return (
        <div className={`relative h-[15vh] z-10 text-white`}>
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
                    <p>+7 (499) 286-0-286</p>
                    <p>INFO@IMGMET.RU</p>
                </div>
            </div>

            <div><img src={background} className={'-z-50 w-full absolute left-0 right-0 h-full top-0 bottom-0'}
                      alt=""/></div>
            <div
                className={'-z-40 absolute opacity-[0.65] left-0 top-0 right-0 bottom-0 h-full  bg-[#1A2A42]'}></div>


        </div>
    );
};

export default Header;