


export interface ICategory{
    categoryid?: number
    name: string
}


export interface IProduct {
    productid?: number
    categoryid?: number
    name: string
    size: number
    price: number
}

export interface IUser{
    userid?: number
    email: string
    password: string
    role?: string
    token?: string
}

export interface IOrder{
    orderid?: number
    userid: number
    productId: number
    lastName: string
    firstName: string
    address: string
    number: number
    quantity: number
    totalprice: number
    status: string
    product_name?: string
}