import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import './style.css';

function CssPreview(props) {
  const {
    value: { topLeft, topRight, bottomLeft, bottomRight }
  } = props;
  const textareaRef = useRef();

  let formattedText = '';

  if (
    isEqual([topLeft, topLeft, topLeft], [topRight, bottomLeft, bottomRight])
  ) {
    formattedText = `border-radius: ${topLeft || 0}px;`;
  } else {
    formattedText = `border-top-left-radius: ${topLeft || 0}px;\r\n`;
    formattedText += `border-top-right-radius: ${topRight || 0}px;\r\n`;
    formattedText += `border-bottom-left-radius: ${bottomLeft || 0}px;\r\n`;
    formattedText += `border-bottom-right-radius: ${bottomRight || 0}px;`;
  }

  function handleCopyCss() {
    const { current } = textareaRef;

    current.select();
    current.setSelectionRange(0, 99999);

    document.execCommand('copy');
  }

  return (
    <div className="css-preview">
      <button
        type="button"
        className="css-preview__button"
        onClick={handleCopyCss}
      >
        Copiar CSS
      </button>
      <textarea
        value={formattedText}
        onChange={() => {}}
        ref={textareaRef}
      ></textarea>
    </div>
  );
}

CssPreview.propTypes = {
  value: PropTypes.shape({
    topLeft: PropTypes.number,
    topRight: PropTypes.number,
    bottomLeft: PropTypes.number,
    bottomRight: PropTypes.number
  }).isRequired
};

export default CssPreview;
