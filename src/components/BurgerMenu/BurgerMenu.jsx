import { useState } from "react";
import s from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const [value, setValue] = useState(true);

  return (
    <div className={s.burgerMenu} onClick={() => setValue(!value)}>
      <span className={value ? s.firstLine : s.firstLineActive}></span>
      <span className={s.secondLine}></span>
      <span className={value ? s.thirdLine : s.thirdLineActive}></span>
    </div>
  );
};
