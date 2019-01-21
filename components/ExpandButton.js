import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import Router from 'next/router';

const ExpandButton = ({ id, children }) => (
  <div
    style={{ cursor: 'pointer' }}
    onClick={() => {
      Router.push({
        pathname: `/card`,
        query: { id }
      });
    }}
  >
    <FontAwesomeIcon icon={faWindowMaximize} style={{ marginRight: '5px' }} />
    {children}
  </div>
);

export default ExpandButton;
