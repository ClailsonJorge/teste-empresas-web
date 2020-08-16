import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import Loading from '../../components/Loading';
import IconEyes from '../../components/IconEyes';
import { Container, Content, FieldInput, Button, Form } from './styles.js';
import { FiLock, FiMail } from 'react-icons/fi';
import { MdError } from 'react-icons/md';
import logoHome from '../../assets/images/logo-home.png';

const SignIn = () => {
  const { signIn, isLoading, hasLoginError, clearLoginError } = useAuth();

  const [password, setPassword] = useState('12341234');
  const [email, setEmail] = useState('testeapple@ioasys.com.br');
  const [typeInput, setTypeInput] = useState('password');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearLoginError();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearLoginError();
  };

  const handleTypeInput = () => {
    typeInput === 'password' ? setTypeInput('text') : setTypeInput('password');
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <Content>
          <img src={logoHome} alt='logo' />
          <h1>Bem-vindo ao empresas</h1>
          <p>
            Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
          </p>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FieldInput>
              <FiMail size={16} />
              <input
                type='text'
                placeholder='E-mail'
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
              {hasLoginError && <MdError size={16} />}
            </FieldInput>
            <FieldInput>
              <FiLock size={16} />
              <input
                type={typeInput}
                placeholder='Senha'
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              {hasLoginError ? (
                <MdError size={16} />
              ) : (
                <IconEyes
                  typeInput={typeInput}
                  toggleEyes={!!password}
                  handleTypeInput={handleTypeInput}
                />
              )}
            </FieldInput>
            {hasLoginError && (
              <p>Credenciais informadas são inválidas, tente novamente.</p>
            )}
            <Button primary={hasLoginError} type='submit'>
              ENTRAR
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
