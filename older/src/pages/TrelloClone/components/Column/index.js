import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppModal from '~/components/AppModal';
import { Creators as TaskCreators } from '~/store/ducks/task';

import Task from './components/Task';
import Space from './components/Space';
import FormAdd from './components/FormAdd';

import { Content, ShowColumn, Title, Header, Add } from './style';

/*eslint eqeqeq: "off"*/
const Column = ({ tasks, column, taskUpdate }) => {
  const [isOpen, setOpen] = useState(false);

  if (!tasks) return null;

  const listTasks = tasks.sort(customSort);

  function handleDrop(e) {
    e.preventDefault();
    const str = e.dataTransfer.getData('text');
    // const oldPos = JSON.parse(str);
    const { id, column: oldColumn } = JSON.parse(str);
    // const newPos = e.target.dataset;
    const { position, column } = e.target.dataset;
    // console.log('ANTIGA POS', oldPos);
    // console.log('NOVA POS', newPos);

    if (!position) return;

    if (listTasks.length) {
      let value = null;

      const firstPosition = listTasks[0].position;
      const lastPosition = listTasks[tasks.length - 1].position;

      if (firstPosition > position) {
        value = firstPosition - 1;
      } else if (lastPosition == position) {
        value = lastPosition + 100;
      } else {
        value = newPosition(listTasks, position);
      }
      taskUpdate({ id, field: 'position', value });
    }

    console.log(oldColumn);
    console.log('NEW', column);

    taskUpdate({ id, field: 'column', value: column });
  }

  return (
    <Content>
      <AppModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        <FormAdd
          position={(tasks.length + 1) * 100}
          column={column}
          onRequestClose={() => setOpen(false)}
        />
      </AppModal>
      <ShowColumn onDragOver={nothing} onDrop={handleDrop}>
        <Header>
          <Title>{column}</Title>
          <Add onClick={() => setOpen(true)}>ADD</Add>
        </Header>
        <RenderTasks tasks={listTasks} column={column} />
      </ShowColumn>
    </Content>
  );
};

/**
 * Other Component
 */
const RenderTasks = ({ tasks, column }) => {
  return (
    <Fragment>
      <Space item={{ position: 25 }} column={column} />
      {tasks.map((e, i) => (
        <Fragment key={String(e.id)}>
          <Task item={e} column={column} />
          <Space item={e} column={column} />
        </Fragment>
      ))}
    </Fragment>
  );
};

const nothing = e => e.preventDefault();

const customSort = (a, b) => {
  if (a.position > b.position) return 1;
  if (a.position < b.position) return -1;
  return 0;
};

const newPosition = (tasks, position) => {
  const min = Math.min.apply(
    null,
    tasks.map(e => e.position > position && e.position).filter(e => e),
  );
  console.log('MIN', min);

  const max = Math.max.apply(
    null,
    tasks.map(e => e.position <= position && e.position).filter(e => e),
  );
  console.log('MAX', max);

  return (min + max) / 2;
};

// const mapStateToProps = state => ({
//   tasks: state.task.data,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      taskUpdate: TaskCreators.taskUpdate,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(Column);
// export default Column;
