import React from 'react';
import { connect } from 'react-redux';

import AppContainer from '~/components/AppContainer';

import Column from './components/Column';

import { Content } from './style';

const TrelloClone = ({ tasks }) => {
  return (
    <AppContainer>
      <Content>
        <Column column={'Backlog'} tasks={tasks['Backlog']} />
        <Column column={'Sprint'} tasks={tasks['Sprint']} />
        <Column column={'Doing'} tasks={tasks['Doing']} />
        {/* <Column column={'Teste2'} /> */}
      </Content>
    </AppContainer>
  );
};

const mapStateToProps = state => ({
  tasks: {
    Backlog:
      state.task.data &&
      state.task.data.filter(item => item.column === 'Backlog'),
    Sprint:
      state.task.data &&
      state.task.data.filter(item => item.column === 'Sprint'),
    Doing:
      state.task.data &&
      state.task.data.filter(item => item.column === 'Doing'),
  },
});

export default connect(mapStateToProps)(TrelloClone);
