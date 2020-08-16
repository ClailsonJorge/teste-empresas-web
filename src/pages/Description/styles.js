import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  img {
    width: 84%;
    height: 30%;
    margin: 30px auto;
  }
  p {
    width: 79%;
    font-size: 24px;
    color: #8d8c8c;
    font-family: 'SourceSansPro';
  }
  @media (max-width: 500px) {
    p {
      font-size: 20px;
    }
  }
`;

export const Header = styled.header`
  min-height: 80px;
  width: 100vw;
  background-image: linear-gradient(to bottom, #ee4c77, #0d0430 300%);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 0;
    background: none;
    color: #fff;
    margin: 0 30px 15px 15px;
    cursor: pointer;
    transition: color 0.3s;
    align-self: flex-end;
    &:hover {
      color: ${darken(0.2, '#fff')};
    }
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 20px;
    line-height: 22px;
    align-self: flex-end;
    margin-bottom: 20px;
    color: #fff;
    caret-color: rgba(255, 255, 255, 0.7);

    &::placeholder {
      color: #fff;
      opacity: 0.4;
    }
  }
`;
