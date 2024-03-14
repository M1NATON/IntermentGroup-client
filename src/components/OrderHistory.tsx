import {IOrder} from "../models/model.ts";

interface OrderHistoryProps{
    order: IOrder
}

const OrderHistory = ({order}:OrderHistoryProps) => {
    return (
        <tr>
           <td>{order.orderid}</td>
            <td>{order.product_name}</td>
            <td>{order.quantity}</td>
            <td>{order.totalprice}</td>
            <td>{order.status}</td>
        </tr>
    );
};

export default OrderHistory;