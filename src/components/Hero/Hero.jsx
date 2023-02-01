import { Container } from "components/Container/Container";
import ClipboardText from "assets/ClipboardText.svg";
import widget from "assets/widget.png";
import s from "./Hero.module.scss";
import styled from "styled-components";

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Обменивай крипту и фиат без ограничений</Title>
        <Button pt="12px" pl="24px" mb="24px">
          Launch app
        </Button>
        <WrapperText>
          <Clipboard src={ClipboardText} alt="icon" />
          <Text>Работает на смарт-контрактах</Text>
        </WrapperText>
      </Container>
      <img src={widget} alt="widget" className={s.widget} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 15px;
  padding-bottom: 32px;
  background: #f5f9fe;
`;

const Title = styled.h1`
  margin-bottom: 24px;

  font-family: "TT Firs Neue";
  font-weight: 500;
  font-size: 32px;
  line-height: 1.25;
  text-align: center;
  color: #000000;
`;

export const Button = styled.button`
  padding: ${(props) => props.pt} ${(props) => props.pl};
  margin-bottom: ${(props) => props.mb};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  background: #3e8bf3;
  color: #ffffff;
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Clipboard = styled.img`
  margin-right: 6px;
`;

const Text = styled.span`
  font-family: "TT Firs Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #6f767e;
`;
