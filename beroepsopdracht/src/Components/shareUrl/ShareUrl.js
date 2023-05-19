import React from 'react';

import "./sharebutton.css";

const ShareButton = ({ url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ url })
        .then(() => console.log('Share successful!'))
        .catch((error) => console.error('Share error:', error));
    } else {
      console.warn('Web Share API not supported.');
      // Fallback behavior for browsers that don't support Web Share API
      // You can implement your own custom sharing solution here
    }
  };

  return (
    <button onClick={handleShare} className="navigationCollect__button">
      Share URL
    </button>
  );
};

export default ShareButton;