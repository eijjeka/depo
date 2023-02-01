import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import logo from "assets/logo.svg";
import s from "./Header.module.scss";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <nav>
        <a href="./" className={s.logo}>
          <img src={logo} alt="logo" />
        </a>
      </nav>
      <Button>Launch app</Button>
      <BurgerMenu />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 16px 0;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42;
  background: #3e8bf3;
  color: #ffffff;
`;
