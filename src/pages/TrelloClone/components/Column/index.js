import React, { Fragment, useState, useEffect } from 'react';

import Task from './components/Task';
import Space from './components/Space';

import { Content, ShowColumn, Title } from './style';

const Column = ({ column }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Array.from({ length: 10 }).map((e, i) => i));
  }, []);

  function handleDrop(e) {
    e.preventDefault();
    const str = e.dataTransfer.getData('text');
    // const teste = e.dataTransfer.getData('caixa');
    console.log('RECEBI', JSON.parse(str));
  }

  return (
    <Content>
      <ShowColumn onDragOver={nothing} onDrop={handleDrop}>
        <Title>{column}</Title>
        <Space position={0} column={column} />
        {tasks.map((e, i) => (
          <Fragment key={String(i)}>
            <Task position={i} column={column} />
            <Space position={i} column={column} />
          </Fragment>
        ))}
      </ShowColumn>
    </Content>
  );
};

const nothing = e => e.preventDefault();

export default Column;
