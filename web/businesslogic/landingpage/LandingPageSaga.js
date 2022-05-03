import { store } from '@betacrew/jars-flux'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import axios from 'axios';
import { componentKey, updateRandomString} from './LandingPageSlice';

export const { genRandomString } = {
    genRandomString: function(payload) {
        return {
            type: "GEN_RANDOM_STRING",
            payload: payload
        }
    },
}

function* genRandomStringAsync() {
    const info = yield axios.get('https://ciprand.p3p.repl.co/api?len=20&count=1');
    yield put(updateRandomString(info?.data?.Strings || "server unresponsive"));
}


function* rootSaga() {
    yield all([
        takeEvery(genRandomString().type, genRandomStringAsync), 
    ]);
}

store.sagaManager.addSaga(componentKey, rootSaga);