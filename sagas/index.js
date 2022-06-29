import {all, fork} from 'redux-saga/effects';
import postSaga from "./post";
import userSaga from "./user";

/*axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;*/

export default function* rootSaga() { // gen 함수 rootSaga.next() 를 해야 실행
    yield all([
        fork(userSaga),
        fork(postSaga),
    ])
}







