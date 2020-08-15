import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Container, Content, Header } from './styles';
import testeImg from '../../assets/images/img-e-1-lista.png';

const Description = () => {
  return (
    <Container>
      <Header>
        <button type='button'>
          <MdArrowBack size={30} />
        </button>
        <input type='text' readOnly value='Nome da Empresa' />
      </Header>
      <Content>
        <img src={testeImg} alt='teste' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
    </Container>
  );
};
export default Description;
