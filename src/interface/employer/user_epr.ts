interface IUserNTD {
    _id: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    phone: string;
    isPhoneVerified: boolean;
    desc_epr: string;
    image: string;
    gender: string;
    age: string;
    address: string;
    password: string;
    passwordResetToken: string;
    passwordChangeAt: string;
    passwordResetExpires: string;
    role: string;
    isBlock: boolean;
}

export default IUserNTD