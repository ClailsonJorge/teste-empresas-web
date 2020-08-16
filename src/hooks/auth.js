import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';
import * as Yup from 'yup';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoginError, setHasLoginError] = useState(false);
  const [headers, setHeaders] = useState();

  const clearLoginError = () => {
    setHasLoginError(false);
  };

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      await schema.validate({ email, password });

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
      console.error(e);
      setHasLoginError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        headers,
        isLoading,
        hasLoginError,
        clearLoginError,
      }}
    >
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
