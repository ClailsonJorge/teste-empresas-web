import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #ebe9d7;
`;

export const Content = styled.div`
  display: flex;
  height: 80%;
  margin: auto 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }

  h1 {
    font-size: 20px;
    width: 50%;
    font-weight: bold;
    text-align: center;
    margin: 40px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    width: 80%;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    color: #ff0f44;
    align-self: center;
  }
`;

export const FieldInput = styled.div`
  background: transparent;
  border-bottom: solid 1px rgba(38, 37, 43, 0.3);
  padding: 8px;
  margin: 16px 0;
  width: 100%;
  color: #ee4c77;
  display: flex;
  justify-content: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #403e4d;
    font-size: 16px;

    &::placeholder {
      color: #383743;
      opacity: 0.7;
    }
  }
  svg {
    margin-right: 8px;
  }

  button.button-eyes {
    background: transparent;
    border: 0;
    svg {
      color: rgba(0, 0, 0, 0.54);
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#748383' : '#57bbbc')};
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 90%;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) =>
      props.primary ? shade(0.2, '#748383') : shade(0.2, '#57bbbc')};
  }
`;
