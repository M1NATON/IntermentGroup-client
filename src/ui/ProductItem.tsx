import {IProduct} from "../models/model.ts";
import basket from '../assets/product/shopping-cart.svg'

interface ProductProps {
    product: IProduct
    onClick: () => void
}

const ProductItem = ({product, onClick}:ProductProps) => {



    return (
        <tr id={'td'} className={'bg-[#f9fbfc] px-2 py-4 hover:bg-white'}>
            <td className={'bg-[#f9fbfc] px-2 py-4 '}>{product.name}</td>
            <td className={'bg-[#f9fbfc] px-2 py-4 '}>{product.size}</td>
            <td className={'bg-[#f9fbfc] px-2 py-4 '}>{product.price}</td>
            <td className={'bg-[#f9fbfc] px-2 py-4 hover:bg-white transition'}>
                <button onClick={onClick} ><img src={basket} alt="" className={'w-[40px]'}/></button>
            </td>

        </tr>
    );
};

export default ProductItem;