import backFooter from '../assets/bg_footer.jpg'
import {NavLink} from "react-router-dom";
import mainLogo from '../assets/home/main_logo.svg'
const Footer = () => {
    return (
        <div className={'relative h-[40vh] text-white'}>
            <img src={backFooter} alt="" className={' -z-50 absolute left-0 top-0 right-0 h-full'}/>
            <div className={'-z-40 absolute opacity-[0.65] left-0 top-0 right-0 bottom-0 h-full  bg-[#1A2A42]'}></div>


            <div className={'flex gap-40 container mx-auto py-[3%]'}>
                <div className={'flex items-start  gap-20'}>
                    <img src={mainLogo} alt="" className={'w-[100px]'}/>
                    <div className={'tracking-[3px] mt-5'}>
                        <p className={'mb-[26px] '}>ВСЕ ВИДЫ МЕТАЛЛОПРОКАТА <br/>
                            ОТ ВЕДУЩИХ ПРОИЗВОДИТЕЛЕЙ</p>
                        <p>ИНТЕРМЕТГРУПП 2022 <br/>
                            ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                    </div>
                </div>

                <nav>
                    <ul className={'flex flex-col gap-10 text-xl'}>
                        <li><NavLink to={'/'}>Главная</NavLink></li>
                        <li><NavLink to={'/products'}>Продукация</NavLink></li>
                        <li><NavLink to={'/handbooks'}>Справочники и ГОСТы</NavLink></li>
                        <li><NavLink to={'/documents'}>Документы</NavLink></li>
                        <li><NavLink to={'/payment'}>Оплата, возврат, обмен</NavLink></li>
                        <li><NavLink to={'/requisites'}>Реквизиты</NavLink></li>
                    </ul>
                </nav>

                <div>
                    <p><a href="#" className={'text-[#8c94a0]'}>Политика конфиденциальности <br/> персональных
                        данных</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;