// sagas.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./actions";

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get,"https://jsonplaceholder.typicode.com/users");
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_DATA_REQUEST',fetchDataSaga);
}


export default rootSaga;