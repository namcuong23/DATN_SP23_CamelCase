import { Outlet } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'
import "../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../assets/css/index.css"

const LayoutClient = () => {
    return (
        <>
            <HeaderClient />
            <Outlet />
            <FooterClient />
        </>
    )
}
export default LayoutClient