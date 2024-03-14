import arrow from '../assets/product/arrow_right_b.svg'

interface CategoryProps{
    name: string
    onClick: () => void
}

const CategoryItem = ({name,onClick}:CategoryProps) => {
    return (
        <div className={'text-[#1A2A42] text-[34px] flex items-center gap-2 cursor-pointer w-fit hover:gap-6 transition-all'} onClick={onClick}>
            {name} <img src={arrow} alt="" className={'w-[30px]'}/>
        </div>
    );
};

export default CategoryItem;