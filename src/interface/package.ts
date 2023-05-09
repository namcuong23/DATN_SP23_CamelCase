interface IPackage {
    _id: string,
    package_name: string,
    package_code: string,
    package_desc: string,
    package_price: number,
    package_day: number,
    status: boolean,
    user_id: string,
}

export default IPackage