import { Outlet } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'
import NotifyModalEpe from '../NotifyModalEpe'
import "../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../assets/css/index.css"

const LayoutClient = () => {
    return (
        <div>
            <div>
                <HeaderClient />
            </div>
            <div>
                <Outlet />
            </div>
            <FooterClient />
        </div>
    )
}
export default LayoutClient