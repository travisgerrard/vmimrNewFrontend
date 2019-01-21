import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeButton = ({
  learning,
  like,
  toggleLike,
  likePresentation,
  children
}) => {
  console.log(learning.likes);

  const likesExist = learning.likes;
  const likesLength = likesExist && learning.likes.length > 0;

  return (
    <>
      <div
        onClick={() => toggleLike(likePresentation)}
        style={{ cursor: 'pointer' }}
      >
        {/* {likesLength && <span>{learning.likes.length}</span>} */}

        <FontAwesomeIcon
          style={{ color: 'red', margin: '0 7px 0 7px' }}
          icon={like ? faHeartSolid : faHeart}
        />
        {children}
      </div>
    </>
  );
};

export default LikeButton;
