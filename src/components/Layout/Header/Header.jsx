import { BurgerBtn } from "components/BurgerMenu/BurgerBtn";
import { Container } from "components/Container/Container";
import logo from "assets/logo.svg";
import s from "./Header.module.scss";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <nav>
          <a href="./">
            <img className={s.logo} src={logo} alt="logo" />
          </a>
        </nav>
        <Button>Launch app</Button>
        <BurgerBtn />
      </Wrapper>
    </Container>
  );
};

export const Button = styled.button`
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

const Wrapper = styled.header`
  padding: 16px 0;
  display: flex;
  align-items: center;
`;
