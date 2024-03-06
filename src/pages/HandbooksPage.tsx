import Header from "../components/Header.tsx";
import bg from '../assets/directories/bg_ghost.png'
import DocsItem from "../ui/DocsItem.tsx";
import {
    armatureProductArr,
    coldProductArr,
    facingProductArr,
    hotProductArr,
    qualifiedProductArr
} from "../bd/handbook.ts";

const HandbooksPage = () => {
    return (
        <div className={'bg-[#f1f5f8]'}>
            <Header/>
            <div className={'text-[#1A2A42] w-full  h-full relative'}>
                <img src={bg} alt="" className={'absolute w-full  left-0 right-0 bottom-0 z-10'}/>
                <div className={'container'}>

                    <h1 className={'text-textColor text-5xl font-bold pt-20 mb-10'}>Справочники и госты</h1>

                    <div className={'flex justify-between pb-[400px]'}>


                        <div className={'w-[30%]'}>
                            <p className={'text-[14px] leading-[3px] uppercase mb-5 text-center'}>ХОЛОДНОКАТАНЫЙ
                                ПРОКАТ</p>
                            {coldProductArr.map((item, idx) => (
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            ))}
                        </div>

                        <div className={'w-[30%]'}>
                            <p className={'text-[14px] leading-[3px] uppercase mb-5 text-center'}>ФАСОННЫЙ ПРОКАТ</p>
                            {facingProductArr.map((item, idx) => (
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            ))}

                            <p className={'text-[14px] leading-[3px] uppercase mb-5 text-center'}>АРМАТУРА</p>
                            {armatureProductArr.map((item, idx) => (
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            ))}
                            <p className={'text-[14px] leading-[3px] uppercase mb-5 text-center'}>ОЦИНКОВАННЫЙ
                                ПРОКАТ</p>
                            {qualifiedProductArr.map((item, idx) => (
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            ))}
                        </div>

                        <div className={'w-[30%]'}>
                            <p className={'text-[14px] leading-[3px] uppercase mb-5 text-center'}>ГОРЯЧЕКАТАНЫЙ
                                ПРОКАТ</p>
                            {hotProductArr.map((item, idx) => (
                                <DocsItem title={item.title} description={item.description} file={item.file} key={idx}/>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandbooksPage;