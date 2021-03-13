import { take, takeEvery, takeLatest, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('onIncrement...');
  yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

export function* incrementSaga() {
  yield takeLatest('INCREMENT', onIncrement);
  yield delay(2000);
}

// export function* incrementSaga() {
//   yield takeEvery('INCREMENT', onIncrement);
// }

/*
  export function* incrementSaga() {
    // Similar to takeEvery using while loop
    // `take` will listen for just the next INCREMENT action dispatched
    while(true) {
      yield take('INCREMENT');
      yield console.log('Incremented...');
    }
  }
*/