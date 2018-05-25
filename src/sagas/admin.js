import { delay } from "redux-saga";
import { all, call, take, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as bookEditActions from "../store/bookEdit/actions";
import * as dictionaryActions from "../store/dictionary/actions";
import Api from "../api";

// WORKERS
function* fetchBookEdit(action) {
  try {
    console.log("fetchBookEdit ", action.payload.value);
    const bookEdit = yield call(Api.admin.getBook, action.payload.value);
    yield put(bookEditActions.setBookEdit(bookEdit.data));
    yield put(bookEditActions.setCancelBookEdit(bookEdit.data));
  } catch (error) {
    console.log("fetchBookEdit error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WORKERS
function* searchDictionary(action) {
  try {
    console.log("searchDictionary ", action.payload.value, action.payload.type);
    const dictionary = yield call(Api.admin.searchDictionary, {...action.payload.value, dictionary: action.payload.type});
    yield put(dictionaryActions.setDictionary(dictionary.data.data, action.payload.type));
  } catch (error) {
    console.log("searchDictionary error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WORKERS
function* fetchDictionary(action) {
  try {
    console.log("fetchDictionary ", action.payload.value, action.payload.type);
    const dictionary = yield call(Api.admin.getDictionary, {...action.payload.value, dictionary: action.payload.type});
    console.log("dictionary ", dictionary.data);
    yield put(dictionaryActions.setDictionary(dictionary.data.data, action.payload.type));
  } catch (error) {
    console.log("fetchDictionary error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WORKERS
function* saveChangeBookEdit(action) {
  try {
    console.log("saveChangeBookEdit ", action.payload.value);
    const saveBookEdit = yield call(Api.admin.saveBook, {...action.payload.value});
    console.log("saveBookEdit ", saveBookEdit.data);
    yield put(bookEditActions.setBookEdit(saveBookEdit.data));
    yield put(bookEditActions.setCancelBookEdit(saveBookEdit.data));
  } catch (error) {
    console.log("saveChangeBookEdit error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

// WATCHERS
function* fetchBookEditFlow() {
  yield takeLatest(bookEditActions.FETCH_BOOK_EDIT, fetchBookEdit);
}

// WATCHERS
function* searchDictionaryFlow() {
  yield takeLatest(dictionaryActions.SEARCH_DICTIONARY, searchDictionary);
}

// WATCHERS
function* fetchDictionaryFlow() {
  yield takeEvery(dictionaryActions.FETCH_DICTIONARY, fetchDictionary);
}

// WATCHERS
function* saveChangeBookEditFlow() {
  yield takeEvery(bookEditActions.SAVE_CHANGE_BOOK_EDIT, saveChangeBookEdit);
}

export default function* admin() {
  yield all([
    fetchBookEditFlow(),
    searchDictionaryFlow(),
    fetchDictionaryFlow(),
    saveChangeBookEditFlow()
  ]);
}