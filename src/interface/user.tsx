interface IUserNTV {
    _id: string;
    name: string;
    email: string;
    isEmailVerified: boolean;
    phone: string;
    isPhoneVerified: boolean;
    birth_day: string;
    desc: string;
    age: string;
    image: string;
    gender: string;
    province: string;
    district: string;
    specific_address: string;
    password: string;
    passwordResetToken: string;
    passwordChangeAt: string;
    passwordResetExpires: string;
    accessToken: string;
    verifiedToken: string;
    tokenExpires: string;
    role: number;
    isBlock: boolean;
    career_goal: string;
    work_experience: object[];
    education: object[];
    skills: object[];
    more_info: string;
}

export default IUserNTV