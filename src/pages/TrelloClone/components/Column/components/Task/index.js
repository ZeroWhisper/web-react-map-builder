import React from 'react';

import { Content } from './style';

const Task = ({ position, column }) => {
  function handleDrag(e) {
    const { position, column } = e.target.dataset;
    const obj = JSON.stringify({ position, column });
    e.dataTransfer.setData('text', obj);
    // e.dataTransfer.setData('caixa', 'caixa');
    console.log('Arraastando', obj, position, column);
  }

  return (
    <Content
      data-column={column}
      data-position={position}
      onDragStart={handleDrag}
      draggable
      color={hex()}>
      Sou uma task {position}
    </Content>
  );
};

const hex = () => {
  const r = () => Math.floor(Math.random() * 256).toString(16);
  return `#${r()}${r()}${r()}`;
};

export default Task;
