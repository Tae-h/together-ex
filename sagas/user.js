import {fork, all, put, call, delay, takeLatest} from "redux-saga/effects";
//import { takeLatest} from "redux-saga";
import axios from "axios";
import {
    KAKAO_LOGIN_FAILURE,
    KAKAO_LOGIN_REQUEST, KAKAO_LOGIN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from "../reducers/user";

/* API */
function loginAPI(data) {
    return axios.post('/user/login', data);
}

function logoutAPI() {
    return axios.post('/user/logout');
}

// 회원가입
function signUpAPI(data) {
    return axios.post('/user/signup', data)
}





/* gen */
function* logIn(action) {
    try {
        console.log('login action: ', action);
        //const result = yield call(loginAPI, action.data); // 나머지는 매개 변
        yield delay(2000);
        yield put({ // put 특정 action 을 dispatch 시켜줌
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    } catch (err) { // err.response.data
        console.error('logIn err: ', err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function* logOut() {
    try {

        //const result = yield call(logoutAPI);
        yield put({ // put 특정 action 을 dispatch 시켜줌
            type: LOG_OUT_SUCCESS,
           // //data: result.data // 성공 결과
            //data: action.data
        });
    } catch (err) { // err.response.data
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }

}

function* signUp(action) {
    try {
        //const result = yield call(signUpAPI, action.data);
        //yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}

function* kakaoLogIn() {
    try {
        console.log('sagas: ', Kakao.isInitialized());
        yield Kakao.Auth.login({
            success: auth => {
                console.log('Login', auth);
            },
            fail: error => {
                console.error('login error', error);
            },
        });
    } catch ( err ) {
        yield put({
            type: KAKAO_LOGIN_FAILURE,
            error: err.response.data,
        })
    }
}


// 이벤트 리스너 같은 역할
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchKakaoLogIn() {
    yield takeLatest(KAKAO_LOGIN_REQUEST, kakaoLogIn);
}


export default function* userSaga () {

    yield all([
        fork(watchKakaoLogIn),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}
