import React, { useState, useEffect, useRef } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';

import './style.css';

const topLeftInputId = uniqueId('radius_input_');
const topRightInputId = uniqueId('radius_input_');
const bottomLeftInputId = uniqueId('radius_input_');
const bottomRightInputId = uniqueId('radius_input_');

function Box(props) {
  const { onChange } = props;

  const [editAllRadiuses, setEditAllRadiuses] = useState(true);
  const [radiuses, setRadiuses] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  });
  const topLeftRef = useRef();

  function handleRadiusInputChange({ target }) {
    if (editAllRadiuses) {
      setRadiuses(
        Object.keys(radiuses).reduce(
          (obj, key) => ({ ...obj, [key]: parseInt(target.value, 10) || 0 }),
          {}
        )
      );
    } else {
      setRadiuses({
        ...radiuses,
        [target.name]: parseInt(target.value, 10) || 0
      });
    }
  }

  useEffect(() => {
    onChange(radiuses);
  }, [radiuses, onChange]);

  useEffect(() => {
    topLeftRef.current.focus();
    topLeftRef.current.select();
  }, []);

  return (
    <div className="box">
      <div className="box__controls">
        <label htmlFor={topLeftInputId}>
          <span>Top Left</span>
          <input
            type="number"
            name="topLeft"
            ref={topLeftRef}
            id={topLeftInputId}
            value={radiuses.topLeft}
            onChange={handleRadiusInputChange}
            onBlur={() => setEditAllRadiuses(false)}
          />
        </label>

        <label htmlFor={topRightInputId}>
          <span>Top Right</span>
          <input
            type="number"
            name="topRight"
            id={topRightInputId}
            value={radiuses.topRight}
            onChange={handleRadiusInputChange}
            onBlur={() => setEditAllRadiuses(false)}
          />
        </label>
      </div>

      <div
        className="box__preview"
        style={{
          borderRadius: `${radiuses.topLeft}px ${radiuses.topRight}px ${radiuses.bottomRight}px ${radiuses.bottomLeft}px`
        }}
      ></div>

      <div className="box__controls">
        <label htmlFor={bottomLeftInputId}>
          <span>Bottom Left</span>
          <input
            type="number"
            name="bottomLeft"
            id={bottomLeftInputId}
            value={radiuses.bottomLeft}
            onChange={handleRadiusInputChange}
            onBlur={() => setEditAllRadiuses(false)}
          />
        </label>

        <label htmlFor={bottomRightInputId}>
          <span>Bottom Right</span>
          <input
            type="number"
            name="bottomRight"
            id={bottomRightInputId}
            value={radiuses.bottomRight}
            onChange={handleRadiusInputChange}
            onBlur={() => setEditAllRadiuses(false)}
          />
        </label>
      </div>
    </div>
  );
}

Box.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Box;
