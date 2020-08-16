import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const EnterpriseCard = ({ enterprise }) => {
  return (
    <Link to={{ pathname: `/description/${enterprise.id}`, enterprise }}>
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
    </Link>
  );
};

export default EnterpriseCard;
