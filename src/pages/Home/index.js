import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import logoImg from '../../assets/images/logo-nav.png';
import { Container, Header, Content, Painel } from './styles';
import testeImg from '../../assets/images/img-e-1-lista.png';

const Home = () => {
  const [click, setClick] = useState(true);
  const [errorSeach, setErrorSearch] = useState(false);
  const [text, setText] = useState('');
  const [companies, setCompanies] = useState([]);

  const handleSearchCompany = () => {
    const enterprises = [
      {
        enterprise: {
          id: 1,
          enterprise_name: 'AllRide',
          description:
            'Urbanatika is a socio-environmental company with economic impact, creator of the agro-urban industry. We want to involve people in the processes of healthy eating, recycling and reuse of organic waste and the creation of citizen green areas. With this we are creating smarter cities from the people and at the same time the forest city.  Urbanatika, Agro-Urban Industry',
          email_enterprise: '',
          facebook: '',
          twitter: '',
          linkedin: '',
          phone: '',
          own_enterprise: false,
          photo:
            '/uploads/enterprise/photo/1/wood_trees_gloomy_fog_haze_darkness_50175_1920x1080.jpg',
          value: 0,
          shares: 100,
          share_price: 10000.0,
          own_shares: 0,
          city: 'Santiago',
          country: 'Chile',
          enterprise_type: {
            id: 21,
            enterprise_type_name: 'Software',
          },
        },
      },
    ];
    const company = enterprises.filter(
      (e) => e.enterprise.enterprise_name.toLowerCase() === text.toLowerCase()
    );

    console.log(company);
    if (company.length) {
      setCompanies(company);
      setErrorSearch(false);
    } else {
      setErrorSearch(true);
    }
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
      <button type='button' onClick={handleSearchCompany}>
        <FaSearch size={24} />
      </button>
      <input
        type='text'
        placeholder='Pesquisar'
        value={text}
        onChange={(e) => handleTextInput(e.target.value)}
      />
      <button type='button' onClick={handleChangeHeader}>
        <IoMdClose size={24} />
      </button>
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
