import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ViewSlidesButton = ({ showSlide, toggleShowSlide, children }) => (
  <div onClick={() => toggleShowSlide()} style={{ cursor: 'pointer' }}>
    <FontAwesomeIcon
      style={
        showSlide
          ? { color: 'grey', marginRight: '7px' }
          : { color: 'black', marginRight: '7px' }
      }
      icon={faEye}
    />
    {children}
  </div>
);

export default ViewSlidesButton;
