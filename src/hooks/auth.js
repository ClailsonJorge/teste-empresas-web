import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [headers, setHeaders] = useState();

  const signIn = async (email, password) => {
    try {
      const response = await api.post('/users/auth/sign_in', {
        email,
        password,
      });
      setUser(response.data);
      setHeaders({
        'access-token': response.headers['access-token'],
        client: response.headers.client,
        uid: response.headers.uid,
      });
      api.interceptors.request.use((config) => {
        config.headers['access-token'] = response.headers['access-token'];
        config.headers.client = response.headers.client;
        config.headers.uid = response.headers.uid;
        return config;
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn, user, headers }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
