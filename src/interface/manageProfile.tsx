interface ImanageProfile {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
// <<<<<<< HEAD
    date: number;
    working: string;
    note: number;
    time: string;
    status: boolean;
// =======
    birth_day: string;
    province: string;
    district: number;
    specific_address: string;
// >>>>>>> 5849e9f51a8b552d7d69049d644b0cbda9008473
}

export default ImanageProfile;