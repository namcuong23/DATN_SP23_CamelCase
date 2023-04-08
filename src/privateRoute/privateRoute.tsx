import React from 'react'
import { useNavigate } from 'react-router-dom';
import UseAuth from '../components/auth/UseAuth';

type LayoutPrivateProps = {
    children: React.ReactElement
}

const PrivateRoute: any = ({ children }: LayoutPrivateProps) => {
    const currentUser: any = UseAuth();
    const navigate = useNavigate();
    if (!currentUser) return navigate('/login');
    return children
}

export default PrivateRoute