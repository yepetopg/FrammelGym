import { useState } from "react";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import { NavItem } from "../../ui/NavItem/NavItem"
import navBarStyle from './navbar.module.css'

export const NavBar = () => {

    const [active, setActive] = useState(false);

    return(
        <nav className={navBarStyle.navBar}>
            <h2>Frammel Gym</h2>

            <ul className={active ? navBarStyle.active : ''}>
                <NavItem text={"Inicio"} href={"/"} cta={false}/>
                <NavItem text={"Servicios"} href={"/"}/>
                <NavItem text={"Planes"} href={"/"}/>
                <NavItem text={"Nosotros"} href={"/"}/>
                <NavItem text={"Contacto"} href={"/"}/>
                <NavItem text={"Inscríbete"} href={"/"} cta={true}/>
            </ul>

            <BurgerMenu active={active} setActive={setActive}/>
        </nav>
    )
}