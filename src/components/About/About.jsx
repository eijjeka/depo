import { Container } from "components/Container/Container";
import s from "./About.module.scss";

export const About = () => {
  return (
    <Container>
      <section className={s.wrapper}>
        <h2 className={s.title}>
          Ведущая платформа для торговли цифровыми активами
        </h2>
        <p className={s.text}>
          Широкий спектр услуг по торговле и управлению цифровыми активами для
          удовлетворения разнообразных торговых потребностей. Всесторонняя
          защита пользовательских активов с нашим автономным хранилищем,
          многофакторным шифрованием и круглосуточным мониторингом безопасности.
        </p>
      </section>
    </Container>
  );
};
