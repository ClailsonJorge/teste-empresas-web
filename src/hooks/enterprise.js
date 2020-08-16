import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [enterprises, setEnterprises] = useState();
  const getAllEnterprises = async (email, password) => {
    try {
      const response = await api.get('/enterprises');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getEnterpriseById = async (enterpriseId) => {
    try {
      const response = await api.get(`/enterprises/${enterpriseId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const filterEnterpriseByName = async (name, enterprise_types) => {
    try {
      const response = await api.get('/enterprises', {
        params: {
          name,
          enterprise_types,
        },
      });
      setEnterprises(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <EnterpriseContext.Provider
      value={{
        getAllEnterprises,
        getEnterpriseById,
        enterprises,
        filterEnterpriseByName,
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
};

function useEnterprise() {
  const context = useContext(EnterpriseContext);
  if (!context) {
    throw new Error('useEnterprise must be used within an EnterpriseProvider');
  }
  return context;
}

export { EnterpriseProvider, useEnterprise };
