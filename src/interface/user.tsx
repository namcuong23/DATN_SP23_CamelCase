interface IUserNTV {
    _id: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    phone: string;
    isPhoneVerified: boolean;
    desc: string;
    birth_day: string;
    province: string;
    district: string;
    specific_address: string;
    password: string;
    passwordResetToken: string;
    passwordChangeAt: string;
    passwordResetExpires: string;
    level_auth: number
}

export default IUserNTV