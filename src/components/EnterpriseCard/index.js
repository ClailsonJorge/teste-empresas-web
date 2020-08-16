import React from 'react';
import { Container } from './styles';

const EnterpriseCard = ({ enterprise }) => {
  /* const mockEnterprise = {
    enterprise_name: 'AllRide',
    enterprise_type: {
      id: 21,
      enterprise_type_name: 'Software',
    },
    country: 'Brasil',
    photo: 'https://picsum.photos/300/200',
  }; */
  return (
    <Container>
      <div className='image-container'>
        <img
          src='https://picsum.photos/300/200'
          alt={enterprise.enterprise_name}
        />
      </div>
      <div className='description-container'>
        <h1>{enterprise.enterprise_name}</h1>
        <p>{enterprise.enterprise_type.enterprise_type_name}</p>
        <strong>{enterprise.country}</strong>
      </div>
    </Container>
  );
};

export default EnterpriseCard;
