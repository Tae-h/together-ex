import axios from "axios";
import {all, call, fork, put, takeLatest, throttle} from "redux-saga/effects";
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
} from "../reducers/post";
import {ADD_POST_TO_ME, REMOVE_POST_OF_ME} from "../reducers/user";

function addPostAPI(data) {
    return axios.post('/post', data)
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}

function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}


function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}

function unLikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}

function uploadImagesAPI(data) {
    return axios.post(`/post/images`, data);
}

function retweetAPI(data) {
    return axios.post(`/post/${data}/retweet`);
}

function loadUserPostsAPI(data, lastId) {
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function loadHashtagPostsAPI(data, lastId) {
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* addPost(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            //data: result.data,
            data: action.data
        });
        yield put({
            type: ADD_POST_TO_ME,
            //data: result.data.id,
            data: action.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}




function* removePost(action) {
    try {
        //const result = yield call(removePostAPI, action.data);
        //const id = shortid.generate();

        yield put({ // put 특정 action 을 dispatch 시켜줌
            type: REMOVE_POST_SUCCESS,
            //data: result.data // 데이터
            data: action.data
        });

        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        })
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function* loadPosts(action) {
    try {
        //const result = yield call(loadPostsAPI, action.lastId);

        yield put({
            type: LOAD_POSTS_SUCCESS,
            //data: result.data,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data
        });
    }
}

function* loadPost(action) {
    try {
        //const result = yield call(loadPostAPI, action.data);

        yield put({
            type: LOAD_POST_SUCCESS,
            //data: result.data,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data
        });
    }
}




function* watchRemoveComment() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}



function* watchLoadPosts() {
    yield throttle(2000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}







export default function* postSaga () {
    yield all([
        fork(watchAddPost),
        fork(watchRemoveComment),
        fork(watchLoadPosts),
        fork(watchLoadPost),
    ]);
}
