import navItemStyles from './navitem.module.css'

export const NavItem = ({text, href, cta}) => {
    return (
        <li className={`${navItemStyles.navItem} ${cta ? navItemStyles.cta : ''}`}><a href={href}>{text}</a></li>
    )
}