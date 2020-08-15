import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 80px;
  background-image: linear-gradient(to bottom, #ee4c77, #0d0430 300%);
  display: flex;
  justify-content: center;
  align-items: center;

  div.initial-state {
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: '. img button';

    img {
      grid-area: img;
      width: 224px;
      height: 48px;
    }

    button {
      grid-area: button;
      border: 0;
      background: none;
      justify-self: end;
      margin-right: 30px;
      color: #fff;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }
  }

  div.change-state {
    width: calc(100% - 60px);
    display: flex;
    align-self: flex-end;
    margin-bottom: 10px;
    justify-content: space-between;
    border-bottom: 0.5px solid #979797;

    button {
      border: 0;
      background: none;
      color: #fff;
      margin: 0 5px 5px 0;
      cursor: pointer;
      transition: color 0.3s;
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
      caret-color: rgba(255, 255, 255, 0.7);

      &::placeholder {
        color: #fff;
        opacity: 0.4;
      }
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    line-height: 26px;
    color: #383743;
  }
`;

export const Painel = styled.div`
  width: 90%;
  height: 108px;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  img {
    width: 150px;
    height: 80px;
    margin-left: 20px;
    border-radius: 4px;
    background: #333;
  }
  div.simple-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    strong {
      font-size: 20px;
      color: #1a0e49;
    }
    p {
      font-size: 17px;
      color: #8d8c8c;
    }
    span {
      font-size: 14px;
      color: #8d8c8c;
    }
  }
`;
