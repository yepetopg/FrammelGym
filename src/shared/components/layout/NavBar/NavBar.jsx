import { useState } from "react";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu"
import { NavItem } from "../../ui/NavItem/NavItem"
import logo_frammelgym from "../../../assets/logo_frammelgym.png"
import navBarStyle from './navbar.module.css'

export const NavBar = () => {

    const [active, setActive] = useState(false);

    return(
        <nav className={navBarStyle.navBar}>
            <img src={logo_frammelgym} alt="Logotipo de frammelgym" />

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
