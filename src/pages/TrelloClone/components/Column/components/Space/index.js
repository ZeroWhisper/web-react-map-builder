import React, { useState } from 'react';

import { Content } from './style';

/*eslint eqeqeq: "off"*/
const Space = ({ item = {}, column }) => {
  const [hover, setHover] = useState(null);

  // if (!item) return null;
  const { position = 50 } = item;

  function onDragOverTest(e) {
    e.preventDefault();
    console.log('ATIVO');
    setHover(e.target.dataset.position);
  }

  function onDragEndTest(e) {
    e.preventDefault();
    console.log('PARADO');
    setHover(null);
  }

  function onDragCaptureTest(e) {
    e.preventDefault();
    const { position, column } = e.target.dataset;
    const obj = { position, column };
    console.log('CAPTUREI', obj);
    setHover(null);
  }

  return (
    <Content
      data-position={position}
      data-column={column}
      hover={position == hover}
      onDragOver={onDragOverTest}
      onDragLeaveCapture={onDragEndTest}
      onDrop={onDragCaptureTest}
    />
  );
};

export default Space;
