import React from 'react';
import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
