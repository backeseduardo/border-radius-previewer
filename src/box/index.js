import React, { useState } from 'react';
import { uniqueId } from 'lodash';

import './style.css';

const topLeftInputId = uniqueId('radius_input_');
const topRightInputId = uniqueId('radius_input_');
const bottomLeftInputId = uniqueId('radius_input_');
const bottomRightInputId = uniqueId('radius_input_');

function Box() {
  const [editAllRadiuses, setEditAllRadiuses] = useState(true);
  const [radiuses, setRadiuses] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  });

  function handleRadiusInputChange({ target }) {
    if (editAllRadiuses) {
      setRadiuses(
        Object.keys(radiuses).reduce(
          (obj, key) => ({ ...obj, [key]: target.value }),
          {}
        )
      );
    } else {
      setRadiuses({
        ...radiuses,
        [target.name]: target.value
      });
    }
  }

  return (
    <div className="box">
      <div className="box__controls">
        <label htmlFor={topLeftInputId}>
          <span>Top Left</span>
          <input
            type="number"
            name="topLeft"
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
          borderRadius: `${radiuses.topLeft}px ${radiuses.topRight}px ${radiuses.bottomLeft}px ${radiuses.bottomRight}px`
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

export default Box;
