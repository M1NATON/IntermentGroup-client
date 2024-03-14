import React, {useContext, useState} from "react";
import {ModalContext} from "../context/ModalContext.tsx";
import {useAppSelector} from "../hooks/redux.ts";
import {orderAPI} from "../store/service/orderService.ts";
import toast from "react-hot-toast";
import ProductItem from "../ui/ProductItem.tsx";
import Modal from "./Modal.tsx";
import MyInput from "../ui/MyInput.tsx";
import {InputMask} from "primereact/inputmask";
import {InputNumber} from "primereact/inputnumber";

const ProductRow = ({product}:any ) => {
    const {open, close} = useContext(ModalContext);
    const [modalOpen, setModalOpen] = useState(false);
    const {user} = useAppSelector(state => state.user)
    const [lastName, setLastName] = useState()
    const [firstName, setFirstName] = useState()
    const [address, setAddress] = useState()
    const [number, setNumber] = useState()
    const [quantity, setQuantity] = useState()
    let totalPrice = 0
    const [createOrder] = orderAPI.useCreateOrderMutation()
    const handleModalOpen = () => {
        open();
        setModalOpen(true);
    };

    const handleModalClose = () => {
        close();
        setModalOpen(false);
    };

    const orderHandler = async (e: React.FormEvent) => {

        e.preventDefault()
        if (quantity) totalPrice = quantity * product.price
        if(!user) return null
        if(user.userid && product.productid && lastName && number && firstName && quantity && address && totalPrice) {

            const body = {

                userid: user.userid,
                productId: product.productid,
                lastName: lastName,
                firstName: firstName,
                number: number,
                quantity: quantity,
                address: address,
                totalprice: totalPrice,
                status: 'В процессе'
            }
            createOrder(body)
            toast.success('Заказ оформлен!');
            close();
            setModalOpen(false);
        }
    }

    return (
        <>
            <ProductItem product={product} onClick={handleModalOpen}/>
            {modalOpen && (
                <Modal title={"Оформление заказа"} onClose={handleModalClose}>
                    <div>
                        {
                            !user && <h1>Войдите в аккаунт что бы оформить заказ</h1>
                        }

                        {
                            user && (
                                <form>
                                    <MyInput
                                        placeholder={'Фамилия'}
                                        type={'text'}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <MyInput
                                        placeholder={'Имя'}
                                        type={'text'}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <MyInput
                                        placeholder={'Адресс'}
                                        type={'text'}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <InputMask
                                        className={'w-full px-4 py-2 outline-0 border-2 rounded-xl text-xl'}
                                        onChange={(e) => setNumber(e.target.value)}
                                        mask={'+7 999-999-99-99'}
                                        placeholder={'+7 999 999 99 99'}
                                        value={number}
                                    />

                                    <InputNumber inputId="minmax-buttons" value={quantity}
                                                 placeholder={'Выберите количество'}
                                                 className={'w-full px-4 py-2 outline-0 border-2 rounded-xl text-xl'}
                                                 onValueChange={(e) => setQuantity(e.target.value)} mode="decimal"
                                                 showButtons
                                                 min={0} max={1000}/>

                                    <button onClick={orderHandler} className={'bg-green-400 px-6 py-2 w-fit mx-auto text-white mt-10 roun'}>Оформить заказ</button>
                                </form>
                            )
                        }
                    </div>
                </Modal>
            )}
        </>
    );
};

export default ProductRow;