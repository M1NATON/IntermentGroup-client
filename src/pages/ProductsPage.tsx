import Header from "../components/Header.tsx";
import {categoryAPI} from "../store/service/categoryService.ts";
import {productAPI} from "../store/service/productService.ts";
import {useState} from "react";
import CategoryItem from "../ui/CategoryItem.tsx";
import ProductRow from "../components/ProductRow.tsx";

const ProductsPage = () => {
    const {data: category} = categoryAPI.useFetchCategoryALLQuery();
    const [categoryNumber, setCategoryNumber] = useState<number>(0);
    const {data: product, refetch} = productAPI.useFetchProductCategoryQuery(
        categoryNumber
    );


    return (
        <div className={"text-black bg-white mb-[100px]"}>
            <Header/>
            <div className="container text-center mt-[150px] flex w-full">
                <ul className={"w-[20%]"}>
                    <li className={"text-[#1A2A42] text-[34px] w-fit"}>Категории:</li>
                    {category &&
                        category.map((item, idx) => (
                            <CategoryItem
                                key={idx}
                                name={item.name}
                                onClick={() => {
                                    refetch();
                                    if (item.categoryid) setCategoryNumber(item.categoryid);
                                }}
                            />
                        ))}
                </ul>

                <div className={" w-[70%]"}>
                    {product && product.length ? (
                        <div>
                            <table className={"w-full bg-[#f9fbfc]"}>
                                <thead>
                                <tr>
                                    <td className={"bg-[#f9fbfc] px-2 py-4"}>ПРОДУКЦИЯ</td>
                                    <td className={"bg-[#f9fbfc] px-2 py-4"}>РАЗМЕР</td>
                                    <td className={"bg-[#f9fbfc] px-2 py-4"}>ЦЕНА</td>
                                </tr>
                                </thead>
                                <tbody>
                                {product.map((item, idx) => (
                                    <ProductRow key={idx} product={item}/>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className={'text-4xl'}>Выберите категорию!</div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductsPage;
