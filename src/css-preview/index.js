import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function CssPreview(props) {
  const { value } = props;

  const textareaRef = useRef();

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
      <textarea defaultValue={value} ref={textareaRef}></textarea>
    </div>
  );
}

CssPreview.propTypes = {
  value: PropTypes.string.isRequired
};

export default CssPreview;
