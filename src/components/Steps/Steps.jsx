import { Container } from "components/Container/Container";
import s from "./Steps.module.scss";
import img1 from "assets/img1.jpg";
import img2 from "assets/img2.jpg";
import img3 from "assets/img3.jpg";

export const Steps = () => {
  return (
    <Container>
      <section className={s.wrapper}>
        <h2 className={s.title}>Совершите обмен за 3 шага</h2>
        <ul className={s.card}>
          <li>
            <img className={s.img} src={img1} alt="" />
            <span className={s.firstStep}>Шаг 1</span>
            <h3 className={s.preTitle}>Создай или найди сделку</h3>
            <p className={s.text}>
              Широкий спектр услуг по торговле и управлению цифровыми активами
              для удовлетворения
            </p>
          </li>
          <li>
            <img className={s.img} src={img2} alt="" />
            <span className={s.firstStep}>Шаг 2</span>
            <h3 className={s.preTitle}>Безопасно переведи средства</h3>
            <p className={s.text}>
              Широкий спектр услуг по торговле и управлению цифровыми активами
              для удовлетворения
            </p>
          </li>
          <li>
            <img className={s.img} src={img3} alt="" />
            <span className={s.firstStep}>Шаг 3</span>
            <h3 className={s.preTitle}>Заверши обмен</h3>
            <p className={s.text}>
              Широкий спектр услуг по торговле и управлению цифровыми активами
              для удовлетворения
            </p>
          </li>
        </ul>
        <button className={s.btn}>Начать обмен</button>
      </section>
    </Container>
  );
};
