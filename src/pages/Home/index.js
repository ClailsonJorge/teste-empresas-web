import React, { useState } from 'react';
import { useEnterprise } from '../../hooks/enterprise';
import { FaSearch } from 'react-icons/fa';
import EnterpriseCard from '../../components/EnterpriseCard';
import {
  Container,
  Header,
  Content,
  HeaderSearch,
  HeaderContainer,
  CloseIcon,
} from './styles';

const Home = () => {
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [inputText, setInputText] = useState('');
  const { filterEnterpriseByName, enterprises } = useEnterprise();

  const handleSubmit = (e) => {
    e.preventDefault();
    filterEnterpriseByName(inputText);
  };
  return (
    <>
      <Header>
        <HeaderContainer hasBackground={!showSearchBar}>
          <HeaderSearch activeSearch={showSearchBar}>
            <FaSearch
              color={'#fff'}
              size={20}
              onClick={() => setShowSearchBar(true)}
            />
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type='text'
                placeholder='Pesquisar'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </form>
            <CloseIcon
              activeSearch={showSearchBar}
              color={'#fff'}
              size={30}
              onClick={() => setShowSearchBar(false)}
            />
          </HeaderSearch>
        </HeaderContainer>
      </Header>
      <Container>
        {!showSearchBar ? (
          <h3>Clique na busca para iniciar.</h3>
        ) : (
          <Content>
            {enterprises &&
              enterprises.enterprises.map((enterprise) => (
                <EnterpriseCard enterprise={enterprise} />
              ))}
          </Content>
        )}
      </Container>
    </>
  );
};

export default Home;
