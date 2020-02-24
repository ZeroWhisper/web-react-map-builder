import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import AppModal from '~/components/AppModal';
// import { Creators as TaskCreators } from '~/store/ducks/task';

import Task from './components/Task';
import Space from './components/Space';
import FormAdd from './components/FormAdd';

import { Content, ShowColumn, Title, Header, Add } from './style';

const Column = ({ tasks, column }) => {
  const [isOpen, setOpen] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    const str = e.dataTransfer.getData('text');
    const oldPos = JSON.parse(str);
    const newPos = e.target.dataset;
    // const teste = e.dataTransfer.getData('caixa');
    console.log('ANTIGA POS', oldPos);
    console.log('NOVA POS', newPos);
    // tasks.find(item => item.position == newPos);
  }

  if (!tasks) return null;

  return (
    <Content>
      <AppModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        <FormAdd
          previous={tasks[tasks.length - 1]}
          column={column}
          onRequestClose={() => setOpen(false)}
        />
      </AppModal>
      <ShowColumn onDragOver={nothing} onDrop={handleDrop}>
        <Header>
          <Title>{column}</Title>
          <Add onClick={() => setOpen(true)}>ADD</Add>
        </Header>
        <RenderTasks tasks={tasks} column={column} />
      </ShowColumn>
    </Content>
  );
};

const RenderTasks = ({ tasks, column }) => {
  return (
    <Fragment>
      <Space position={0} column={column} />
      {tasks.map((e, i) => (
        <Fragment key={String(i)}>
          <Task position={i} column={column} item={e} />
          <Space position={i + 1} column={column} />
        </Fragment>
      ))}
    </Fragment>
  );
};

const nothing = e => e.preventDefault();

// const customSort = (a, b) => {
//   if (a.position > b.position) return 1;
//   if (a.position < b.position) return -1;
//   return 0;
// };

// const mapStateToProps = state => ({
//   tasks: state.task.data,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       taskUpdate: TaskCreators.taskUpdate,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(Column);
export default Column;
