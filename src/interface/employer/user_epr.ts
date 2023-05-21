interface IUserNTD {
    _id: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    phone: string;
    isPhoneVerified: boolean;
    desc_epr: string;
    birth_day: string;
    address: string;
    password: string;
    passwordResetToken: string;
    passwordChangeAt: string;
    passwordResetExpires: string;
    level_auth: number
}

export default IUserNTD