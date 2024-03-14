import Header from "../components/Header.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {logout, setUser} from "../store/reducers/userSlice.ts";
import {useNavigate} from "react-router-dom";
import {userAPI} from "../store/service/userService.ts";
import {useEffect} from "react";
import {orderAPI} from "../store/service/orderService.ts";
import OrderHistory from "../components/OrderHistory.tsx";
import {IOrder} from "../models/model.ts";

const ProfilePage = () => {



    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const {data, refetch} = userAPI.useProfileUserQuery()
    useEffect(() => {
        refetch()
        if(data) dispatch(setUser(data))
    }, [data]);



    const {data: orderUserData, refetch: orderRefetch} = orderAPI.useFetchOrderUserQuery(user && user.userid)

    useEffect(() => {
        orderRefetch()
    }, [orderUserData]);

    // const exitHandler = () => {
    //     dispatch(logout())
    //     navigate('/')
    // }
    if(!user) return <h1>Пусто</h1>


    return (
        <div className={'text-[#1A2A42] w-full'}>
            <Header/>

            <div className={'text-[#1A2A42] w-full'}>
                <div className="container">
                    <h1 className={'text-4xl text-center mt-10 mb-20'}>История заказов</h1>
                    {
                        orderUserData && !orderUserData.length ? (<h1 className={'text-center text-4xl text-red-400'}>У вас нет заказов!</h1>)
                            : (<table className={'w-full text-center mb-40'}>
                                <thead>
                                <tr>
                                    <td>Номер заказа</td>
                                    <td>Название продукта</td>
                                    <td>Количество</td>
                                    <td>Общая сумма(руб)</td>
                                    <td>Статус</td>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    orderUserData && orderUserData.map((item: IOrder, idx: number) => (
                                        <OrderHistory key={idx} order={item}/>
                                    ))
                                }
                                </tbody>
                            </table>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ProfilePage;