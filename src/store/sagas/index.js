import { all, takeLatest, spawn } from 'redux-saga/effects';

import { Type as TaskTypes } from '~/store/ducks/task';

import * as TaskSaga from './task';

export default function* rootSaga() {
  const list = [];

  list.push(spawn(TaskSaga.taskChannel));
  list.push(takeLatest(TaskTypes.FIREBASE, TaskSaga.taskFirebase));
  list.push(takeLatest(TaskTypes.REQUEST, TaskSaga.taskRequest));

  yield all([...list]);
}
