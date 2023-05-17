import { Outlet, useNavigate } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'
import "../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../assets/css/index.css"
import UseAuth from '../auth/UseAuth'
import { useGetUserByEmailQuery } from '../../service/auth'
// import "../../assets/css/footer.css"
// import "../../assets/css/sb-admin-2.min.css"

type Props = {}

const LayoutClient = (props: Props) => {
    // const navigate = useNavigate()
    // const currentUser: any = UseAuth()
    // const user = useGetUserByEmailQuery(currentUser?.email)
    // console.log(user);
    // if (!user.currentData) {
    //     return navigate('/login')
    // }
    return (
        <div>
            <HeaderClient />
            <div>
                <Outlet />
            </div>
            {/* <FooterClient /> */}
        </div>
    )
}
export default LayoutClient