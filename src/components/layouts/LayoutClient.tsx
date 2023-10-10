import { Outlet } from 'react-router-dom'
import FooterClient from './layoutComponentClient/FooterClient'
import HeaderClient from './layoutComponentClient/HeaderClient'
import HeaderSearchhJob from './layoutComponentClient/HeaderSearchhJob'
import NotifyModalEpe from '../NotifyModalEpe'
import "../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../assets/css/index.css"

type Props = {}

const LayoutClient = (props: Props) => {
    return (
        <div>
            <div>
                <HeaderClient />
                <HeaderSearchhJob />
            </div>
            <div>
                <Outlet />
            </div>
            <FooterClient />
        </div>
    )
}
export default LayoutClient