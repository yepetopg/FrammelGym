import { useRef, useState } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../../../assets/Hamburger_menu.json";
import burgerMenuStyle from './burgerMenu.module.css'

export default function BurgerMenu({active, setActive}) {
  const lottieRef = useRef();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
  
  if (open) {
    lottieRef.current.playSegments([0, 60], true);
  } else {
    lottieRef.current.playSegments([85, 140], true);
  }
  setActive(!active);
  setOpen(!open);
  console.log(active)
};

  return (
    <button onClick={handleClick} className={burgerMenuStyle.menu}>
      <Lottie
        lottieRef={lottieRef}
        animationData={menuAnimation}
        autoplay={false}
        loop={false}
        style={{
            width: 40,
            height: 40,
        }}
      />
    </button>
  );
}