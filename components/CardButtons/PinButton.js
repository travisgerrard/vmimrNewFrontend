import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
// import { faThumbtack } from '@fortawesome/free-regular-svg-icons';

const PinCard = ({ pinCard, children }) => (
  <div onClick={() => pinCard()} style={{ cursor: 'pointer' }}>
    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faThumbtack} />
    {children}
  </div>
);

export default PinCard;
