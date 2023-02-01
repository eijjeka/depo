import { useState } from "react";
import s from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const [value, setValue] = useState(false);

  return (
    <div className={s.burgerMenu} onClick={() => setValue(!value)}>
      <span className={s.firstLine}></span>
      <span className={s.secondLine}></span>
      <span className={s.thirdLine}></span>
    </div>
  );
};
