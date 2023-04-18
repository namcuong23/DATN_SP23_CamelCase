interface IOrder {
    _id: string,
    order_price: number,
    order_name: string,
    order_status: boolean,
    order_count: number,
    custom: string,
    user_id: string,
    package_id: string,
    voucher_id: string
}

export default IOrder