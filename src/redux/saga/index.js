import { all, takeLatest } from 'redux-saga/effects';

// import { DashboardTypes, SignalTypes } from '~/constants/types';

// import { dashboardRequest, dashboardRequest } from './dashboard';

export default function* rootSaga() {
  const list = [];

  // list.push(takeLatest(DashboardTypes.REQUEST, dashboardRequest));

  yield all([...list]);
}
