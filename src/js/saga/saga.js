import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// 封装异步请求数据 get

function fetchData(url) {
  fetch(url).then(response => response.json()).then(json => dispatch(receivePosts(subreddit, json)))
}

function* fetchUser(action) {
   try {
      const data = yield call(fetchData, action.url);
      yield put({type: "ASYNC_GET_DATA", data});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("CHANGE_DEMO_ACTION", fetchUser);
}

export default mySaga;