import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Container, Content, Header } from './styles';
import { useLocation, useHistory } from 'react-router-dom';

const Description = () => {
  const { enterprise } = useLocation();
  const history = useHistory();
  return (
    <Container>
      <Header>
        <button type='button' onClick={history.goBack}>
          <MdArrowBack size={30} />
        </button>
        <input type='text' readOnly value={enterprise.enterprise_name} />
      </Header>
      <Content>
        <img src='https://picsum.photos/300/200' alt='logo' />
        <p>{enterprise.description}</p>
      </Content>
    </Container>
  );
};
export default Description;
