import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../components/Loading';
import { Container, Content, Form, FieldInput, Button } from './styles.js';
import { FiLock, FiMail } from 'react-icons/fi';
import { MdError } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import logoHome from '../../assets/images/logo-home.png';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typeInput, setTypeInput] = useState('password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/auth/sign_in', {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTypeInput = () => {
    typeInput === 'password' ? setTypeInput('text') : setTypeInput('password');
  };

  const renderEyes = () => {
    if (password) {
      if (typeInput === 'password') {
        return (
          <button
            type='button'
            className='button-eyes'
            onClick={handleTypeInput}
          >
            <BsEyeFill />
          </button>
        );
      } else {
        return (
          <button
            type='button'
            className='button-eyes'
            onClick={handleTypeInput}
          >
            <BsEyeSlashFill />
          </button>
        );
      }
    } else {
      return;
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <Content>
          <img src={logoHome} alt='logo' />
          <h1>BEM-VINDO AO EMPRESAS</h1>
          <p>
            Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
          </p>
          <Form action='' onSubmit={(e) => handleSubmit(e)}>
            <FieldInput>
              <FiMail size={16} />
              <input
                type='text'
                placeholder='E-mail'
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
              {errorLogin && <MdError size={16} />}
            </FieldInput>
            <FieldInput>
              <FiLock size={16} />
              <input
                type={typeInput}
                placeholder='Senha'
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              {errorLogin ? <MdError size={16} /> : renderEyes()}
            </FieldInput>
            {errorLogin && (
              <p>Credenciais informadas são inválidas, tente novamente.</p>
            )}
            <Button primary={errorLogin} type='submit'>
              ENTRAR
            </Button>
          </Form>
          <Link to='/description/Stark/1'>teste</Link>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
