import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
// import { faThumbtack } from '@fortawesome/free-regular-svg-icons';

const PinCard = ({ changedPinnedStatus, isPinned, pinCard, children }) => (
  <div
    onClick={() => pinCard(changedPinnedStatus)}
    style={{ cursor: 'pointer' }}
  >
    <FontAwesomeIcon
      style={
        isPinned
          ? { color: 'red', marginRight: '7px' }
          : { color: 'black', marginRight: '7px' }
      }
      icon={faThumbtack}
    />
    {children}
  </div>
);

export default PinCard;
