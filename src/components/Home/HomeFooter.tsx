import aboutBack from '../../assets/home/main_about_bg.jpg'
const HomeFooter = () => {
    return (
        <div className={'relative text-black py-10 h-[70vh]'}>
            <img src={aboutBack} className={'-z-10 absolute top-0 left-0 right-0'} alt=""/>
            <div className={'container mx-auto text-center'}>
                <h2 className={'text-[24px] font-[700] mb-[30px]'}>Более 22 лет назад были организованы первые <br/>
                    металлоторгующие организации, вошедшие затем в 2007 году <br/>
                    в группу компаний «ИнтерметГрупп».</h2>
                <p className={'text-[18px] leading-[34px]'}>Начиная с этого момента и до настоящего времени, складская реализация <br/>
                    металлопроката и оптовые поставки с металлургических заводов <br/>
                    и комбинатов являются основными направлениями нашей работы.</p>
            </div>
        </div>
    );
};

export default HomeFooter;