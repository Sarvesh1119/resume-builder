import { put, call, takeEvery, all } from 'redux-saga/effects'
import PostUser from "./PostUser"

function* postData(action){
    try{
        yield call(PostUser,"http://localhost:3001/resume/create",action.payload,window.localStorage.getItem('token'))
    }catch(e){
        console.error(e.message)
    }
}

function* watcherSaga(){
    yield takeEvery("POST_DATA",postData)
}

export default function* rootSaga(){
    yield all([watcherSaga()])
}

