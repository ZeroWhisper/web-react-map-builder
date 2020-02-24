import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TaskCreators } from '~/store/ducks/task';

import { Content, TitleTask, ButtonDelete } from './style';

const Task = ({ item = {}, position, column, taskDel }) => {
  function handleDrag(e) {
    const { position, column } = e.target.dataset;
    const obj = JSON.stringify({ position, column, id: item.id });
    e.dataTransfer.setData('text', obj);
    // e.dataTransfer.setData('caixa', 'caixa');
    console.log('Arraastando', obj, position, column);
  }

  function handleRemoveButton(e) {
    e.preventDefault();
    console.log(item.id);
    taskDel(item.id);
  }

  return (
    <Content
      data-column={column}
      data-position={position}
      onDragStart={handleDrag}
      color={'white'}
      draggable>
      <TitleTask>
        {position} {item.title || null} <br />
        {item.message || null}
      </TitleTask>
      <ButtonDelete onClick={handleRemoveButton}>REMOVE</ButtonDelete>
    </Content>
  );
};

// const hex = () => {
//   const r = () => Math.floor(Math.random() * 256).toString(16);
//   return `#${r()}${r()}${r()}`;
// };

const mapDispatchToProps = dispatch =>
  bindActionCreators({ taskDel: TaskCreators.taskDel }, dispatch);

export default connect(null, mapDispatchToProps)(Task);
// export default Task;
