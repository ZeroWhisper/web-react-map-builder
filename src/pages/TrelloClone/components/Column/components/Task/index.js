import React from 'react';

import { Content } from './style';

const Task = ({ item = {}, position, column }) => {
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
      color={'white'}
      draggable>
      {position} {item.title || null} <br />
      {item.message || null}
    </Content>
  );
};

const hex = () => {
  const r = () => Math.floor(Math.random() * 256).toString(16);
  return `#${r()}${r()}${r()}`;
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ taskRequest: TaskCreators.taskRequest }, dispatch);

// export default connect(null)(Task);
export default Task;
