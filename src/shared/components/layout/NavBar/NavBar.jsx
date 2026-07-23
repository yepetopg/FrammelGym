import { NavItem } from "../../ui/NavItem/NavItem"
import navBarStyle from './navbar.module.css'

export const NavBar = () => {
    return(
        <nav className={navBarStyle.navBar}>
            <h2>FrammelGym</h2>

            <ul>
                <NavItem text={"Inicio"} href={"/"} cta={false}/>
                <NavItem text={"Servicios"} href={"/"}/>
                <NavItem text={"Planes"} href={"/"}/>
                <NavItem text={"Nosotros"} href={"/"}/>
                <NavItem text={"Contacto"} href={"/"}/>
                <NavItem text={"Inscríbete"} href={"/"} cta={true}/>
            </ul>
        </nav>
    )
}