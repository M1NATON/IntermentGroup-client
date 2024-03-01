
import item1 from '../../assets/home/item1.png'
import item2 from '../../assets/home/item2.png'
import item3 from '../../assets/home/item3.png'

const HomeMain = () => {
    return (
        <div className={'text-black container mx-auto py-[100px]'}>
            <div className={'flex justify-around w-full'}>
                <div className={'w-[30%] text-center'}>
                    <img src={item1} alt="" className={'rounded-[25px] mx-auto'}/>
                    <h2 className={'text-2xl font-[600] my-[10px]'}>Металлопрокат</h2>
                    <p>оптом и в розницу</p>
                </div>

                <div className={'w-[30%] text-center'}>
                    <img src={item2} alt="" className={'rounded-[25px] mx-auto'}/>
                    <h2 className={'text-2xl font-[600] my-[10px]'}>Порезка, упаковка</h2>
                    <p>в необходимый размер</p>
                </div>

                <div className={'w-[30%] text-center'}>
                    <img src={item3} alt="" className={'rounded-[25px] mx-auto'}/>
                    <h2 className={'text-2xl font-[600] my-[10px]'}>Доставка</h2>
                    <p>по всей России и СНГ</p>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;