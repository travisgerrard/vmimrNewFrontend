import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const EditCardButton = ({ editPresentation, learning, children }) => (
  <div onClick={() => editPresentation(learning)} style={{ cursor: 'pointer' }}>
    <FontAwesomeIcon
      style={{ color: 'black', margin: '0 7px 0 7px' }}
      icon={faPencilAlt}
    />
    {children}
  </div>
);

export default EditCardButton;
