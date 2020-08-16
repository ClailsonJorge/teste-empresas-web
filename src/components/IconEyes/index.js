import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const IconEyes = ({ typeInput, toggleEyes, handleTypeInput }) => {
  if (toggleEyes) {
    return (
      <button type='button' className='button-eyes' onClick={handleTypeInput}>
        {typeInput === 'password' ? <BsEyeFill /> : <BsEyeSlashFill />}
      </button>
    );
  }

  return null;
};

export default IconEyes;
