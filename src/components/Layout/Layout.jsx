import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Hero } from "components/Hero/Hero";
import { About } from "components/About";
import { Footer } from "./Footer/Footer";
import { Steps } from "components/Steps/Steps";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <Steps />
      </Main>
      <Footer />
      <BurgerMenu />
    </>
  );
};
