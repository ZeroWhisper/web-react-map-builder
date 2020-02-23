import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TaskCreators } from '~/store/ducks/task';

import Task from './components/Task';
import Space from './components/Space';

import { Content, ShowColumn, Title, Header, Add } from './style';

const Column = ({ tasks, column, taskRequest, taskFirebase }) => {
  // const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // setTasks(Array.from({ length: 10 }).map((e, i) => i));
    taskFirebase();
  }, []);

  function handleDrop(e) {
    e.preventDefault();
    const str = e.dataTransfer.getData('text');
    const oldPos = JSON.parse(str);
    const newPos = e.target.dataset;
    // const teste = e.dataTransfer.getData('caixa');
    console.log('ANTIGA POS', JSON.parse(str), oldPos);
    console.log('NOVA POS', e.target.dataset, newPos);
  }

  function addTask() {
    // setTasks(e => [...e, { id: Math.random(), title: 'Titulo' }]);
    taskRequest({ title: 'Titulo', message: 'Eu estou aqui' });
  }

  if (!tasks) return null;

  return (
    <Content>
      <ShowColumn onDragOver={nothing} onDrop={handleDrop}>
        <Header>
          <Title>{column}</Title>
          <Add onClick={() => addTask()}>ADD</Add>
        </Header>
        <RenderTasks tasks={tasks} column={column} />
      </ShowColumn>
    </Content>
  );
};

const RenderTasks = ({ tasks, column }) => {
  return (
    <>
      <Space position={0} column={column} />
      {tasks.map((e, i) => (
        <Fragment key={String(i)}>
          <Task position={i} column={column} item={e} />
          <Space position={i + 1} column={column} />
        </Fragment>
      ))}
    </>
  );
};

const nothing = e => e.preventDefault();

const mapStateToProps = state => ({
  tasks: state.task.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      taskRequest: TaskCreators.taskRequest,
      taskFirebase: TaskCreators.taskFirebase,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Column);
