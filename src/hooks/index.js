import React from 'react';
import { AuthProvider } from './auth';
import { EnterpriseProvider } from './enterprise';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <EnterpriseProvider>{children}</EnterpriseProvider>
  </AuthProvider>
);

export default AppProvider;
