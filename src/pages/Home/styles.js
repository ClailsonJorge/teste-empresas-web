import styled, { css } from 'styled-components';
import logoImg from '../../assets/images/logo-nav.png';
import { IoMdClose } from 'react-icons/io';

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  background: linear-gradient(to bottom, #ee4c77, #0d0430 300%);
  display: flex;
`;

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 0 24px;
  transition: background 0.6s;
  ${(props) =>
    props.hasBackground &&
    css`
      background: url(${logoImg}) no-repeat center;
    `}

  @media(max-width: 600px) {
    padding: 0;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  transition: width 0.6s, border 0.6s;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1.5px solid #d8d8d8;
      width: 100%;
    `}

  form {
    flex: 1;
    transition: display 0.6s;
    ${(props) =>
      !props.active &&
      css`
        display: none;
      `}

    margin: 0 24px;

    input {
      background: transparent;
      border: none;
      width: 100%;
      color: #fff;
      font-size: 16px;

      &::placeholder {
        color: #991237;
      }
    }
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  color: #fff;
  size: 30;
  transition: display 0.6s;
  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  > h3 {
    color: #383743;
    font-size: 24px;
  }
`;

export const Content = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 48px;
  h3 {
    color: #b5b4b4;
    font-size: 24px;
    margin-top: 70px;
  }
`;
