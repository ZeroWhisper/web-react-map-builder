import { call, take, put } from 'redux-saga/effects';
// import CJSON from 'circular-json';
import rsf from '~/service/firebase';
// import rsf from 'redux-saga-firebase';

import { Creators as TaskCreators } from '~/store/ducks/task';
// import rsf from '~/config/firebase';

export function* taskChannel() {
  const channel = rsf.firestore.channel('task');
  while (true) {
    const task = yield take(channel);

    const result = [];
    task.forEach(doc => result.push({ id: doc.id, ...doc.data() }));

    // const res = [];
    // task.forEach(doc =>
    //   res.push({
    //     id: doc.id,
    //     ...doc.data(),
    //   }),
    // );

    yield put(TaskCreators.taskSuccess(result));
  }
}

export function* taskAdd({ payload }) {
  yield call(rsf.firestore.addDocument, 'task', payload);

  // console.log(doc.data());
}

export function* taskDel({ payload }) {
  yield call(rsf.firestore.deleteDocument, `task/${payload}`);

  // console.log(doc.data());
}

export function* taskUpdate({ payload }) {
  if (!payload) return;

  const { id, field, value } = payload;

  yield call(rsf.firestore.updateDocument, `task/${id}`, field, value);
}

export function* taskRequest() {
  // const userData = {
  //   title: 'Test12e',
  //   message: 'test12e',
  // };

  yield call(rsf.firestore.addDocument, 'task', {
    title: 'Elon ' + Date.now(),
    message: 'Musk',
  });

  // yield call(rsf.firestore.addDocument, `users/123`, userData);

  // const doc = yield call(rsf.database.ref('task').push, {
  //   title: 'Elon',
  //   message: 'Musk',
  // });

  // const doc = yield call(
  //   rsf.database.update,
  //   `task/${userData.title}`,
  //   userData,
  // );

  // console.tron.log('TESTE', doc);
}

export function* taskSuccess() {}
export function* taskFailure() {}

export function* taskFirebase() {
  // try {
  //   console.log('TO AQUI');
  // } catch (e) {
  //   console.log(e.message);
  // }
}
