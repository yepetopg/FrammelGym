import { Link } from "react-router"
import navItemStyles from './navitem.module.css'

export const NavItem = ({text, href, cta}) => {
    return (
        <li className={`${navItemStyles.navItem} ${cta ? navItemStyles.cta : ''}`}><Link to={href}>{text}</Link></li>
    )
}