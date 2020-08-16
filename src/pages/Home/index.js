import React, { useState } from 'react';
import { useEnterprise } from '../../hooks/enterprise';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import logoImg from '../../assets/images/logo-nav.png';
import { Container, Header, Content, Painel } from './styles';
import testeImg from '../../assets/images/img-e-1-lista.png';

const Home = () => {
  const [click, setClick] = useState(true);
  const [errorSeach, setErrorSearch] = useState(false);
  const [text, setText] = useState('');
  const [companies] = useState([]);
  const { filterEnterpriseByName } = useEnterprise();

  const handleSearchCompany = async (e) => {
    e.preventDefault();
    filterEnterpriseByName('Alpa');
  };

  const initialState = () => (
    <div className='initial-state'>
      <img src={logoImg} alt='logo' />
      <button type='button' onClick={handleChangeHeader}>
        <FaSearch size={30} />
      </button>
    </div>
  );

  const handleTextInput = (e) => {
    setText(e);
  };

  const loadSearchInput = () => (
    <div className='change-state'>
      <form onSubmit={(e) => handleSearchCompany(e)}>
        <FaSearch size={24} onClick={handleSearchCompany} />
        <input
          type='text'
          placeholder='Pesquisar'
          value={text}
          onChange={(e) => handleTextInput(e.target.value)}
        />
        <button type='button' onClick={handleChangeHeader}>
          <IoMdClose size={24} />
        </button>
      </form>
    </div>
  );

  const handleChangeHeader = () => {
    setClick(!click);
    setErrorSearch(false);
    setText('');
  };

  return (
    <Container>
      <Header>{click ? initialState() : loadSearchInput()}</Header>
      <Content>
        {click && <p>Clique na busca para iniciar.</p>}
        {!click &&
          companies.map((company) => (
            <Painel key={company.enterprise.id}>
              <img
                src={company.enterprise.photo}
                alt={company.enterprise.enterprise_name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = testeImg;
                }}
              />
              <div className='simple-info'>
                <strong>{company.enterprise.enterprise_name}</strong>
                <p>{company.enterprise.enterprise_type.enterprise_type_name}</p>
                <span>{company.enterprise.country}</span>
              </div>
            </Painel>
          ))}
        {errorSeach && (
          <p>Nenhuma empresa foi encontrada para a busca realizada.</p>
        )}
      </Content>
    </Container>
  );
};

export default Home;
