import { all, call, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as objectEditActions from "../store/objectEdit/actions";
import * as objectEditSelectors from "../store/objectEdit/selectors";
import * as dictionaryActions from "../store/dictionary/actions";
import Api from "../api";

// WORKERS
function* searchDictionary(action) {
  try {
    const dictionary = yield call(Api.admin.searchDictionary, {...action.payload.value, dictionary: action.payload.type});
    yield put(dictionaryActions.setDictionary(dictionary.data.data, action.payload.type));
  } catch (error) {
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
    const dictionary = yield call(Api.admin.getDictionary, {...action.payload.value, dictionary: action.payload.type});
    yield put(dictionaryActions.setDictionary(dictionary.data.data, action.payload.type));
  } catch (error) {
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
function* saveChangeObjectEdit(action) {
  try {
    console.log("saveChangeObjectEdit ", action.payload.value);
    const activeObject = yield select((state) => objectEditSelectors.getActiveObject(state.objectEdit));
    const saveObjectEdit = yield call(Api.admin.saveObject, {...action.payload.value}, activeObject);
    console.log("saveObjectEdit ", saveObjectEdit.data);
    yield put(objectEditActions.setObjectEdit(saveObjectEdit.data));
    yield put(objectEditActions.setCancelObjectEdit(saveObjectEdit.data));
    yield put(
      flashActions.showFlash(
        "Внесенные изменения были сохранены",
        "success",
        true,
      ),
    );
  } catch (error) {
    console.log("saveChangeObjectEdit error", error);
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
function* saveImage(action) {
  try {
    const imageUrl = yield call(Api.admin.saveFile, action.payload.value);
    yield put(objectEditActions.setImage(imageUrl.data, action.payload.field));
  } catch (error) {
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
function* fetchObjectEdit(action) {
  try {
    if (action.payload.value !== 'new') {
      const activeObject = yield select((state) => objectEditSelectors.getActiveObject(state.objectEdit));
      const objectEdit = yield call(Api.admin.getObject, action.payload.value, activeObject);
      yield put(objectEditActions.setObjectEdit(objectEdit.data));
      yield put(objectEditActions.setCancelObjectEdit(objectEdit.data));
    } else {
      yield put(objectEditActions.setNewObjectEdit());
    }
  } catch (error) {
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
function* fetchObjectEditList(action) {
  try {
    const activeObject = yield select((state) => objectEditSelectors.getActiveObject(state.objectEdit));
    const objectQueryParams = yield select((state) => objectEditSelectors.getObjectQueryParams(state.objectEdit));
    const objectEditList = yield call(Api.admin.getObjectList, {...objectQueryParams, ...action.payload.value}, activeObject);
    yield put(objectEditActions.setObjectEditList(objectEditList.data));
  } catch (error) {
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
function* changeSearchValueObject(action) {
  try {
    yield put(objectEditActions.setSearchValue(action.payload.value));
    yield put(objectEditActions.fetchObjectEditList());
  } catch (error) {
    yield put(
      flashActions.showFlash(
        "Ошибка! Данные не получены",
        "danger",
        true,
      ),
    );
  }
}

function* changeSortFieldObject(action) {
  try {
    yield put(objectEditActions.setSortField(action.payload.value));
    yield put(objectEditActions.fetchObjectEditList());
  } catch (error) {
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
function* deleteObjectEdit(action) {
  try {
    const activeObject = yield select((state) => objectEditSelectors.getActiveObject(state.objectEdit));
    yield call(Api.admin.deleteObject, action.payload.value, activeObject);
    yield put(objectEditActions.fetchObjectEditList());
    yield put(
      flashActions.showFlash(
        "Запись была успешно удаленна",
        "success",
        true,
      ),
    );
  } catch (error) {
    console.log("saveChangeObjectEdit error", error);
    yield put(
      flashActions.showFlash(
        "Ошибка! Удаление не произведенно",
        "danger",
        true,
      ),
    );
  }
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
function* saveChangeObjectEditFlow() {
  yield takeLatest(objectEditActions.SAVE_CHANGE_OBJECT_EDIT, saveChangeObjectEdit);
}

// WATCHERS
function* saveImageFlow() {
  yield takeLatest(objectEditActions.SAVE_IMAGE, saveImage);
}

// WATCHERS
function* fetchObjectEditFlow() {
  yield takeLatest(objectEditActions.FETCH_OBJECT_EDIT, fetchObjectEdit);
}

// WATCHERS
function* fetchObjectEditListFlow() {
  yield takeLatest(objectEditActions.FETCH_OBJECT_EDIT_LIST, fetchObjectEditList);
}

// WATCHERS
function* changeSearchValueObjectFlow() {
  yield takeLatest(objectEditActions.CHANGE_SEARCH_VALUE, changeSearchValueObject);
}

// WATCHERS
function* changeSortFieldObjectFlow() {
  yield takeLatest(objectEditActions.CHANGE_SORT_FIELD, changeSortFieldObject);
}

// WATCHERS
function* deleteObjectEditFlow() {
  yield takeLatest(objectEditActions.DELETE_OBJECT_EDIT, deleteObjectEdit);
}

export default function* admin() {
  yield all([
    searchDictionaryFlow(),
    fetchDictionaryFlow(),
    saveChangeObjectEditFlow(),
    saveImageFlow(),
    fetchObjectEditFlow(),
    fetchObjectEditListFlow(),
    changeSearchValueObjectFlow(),
    changeSortFieldObjectFlow(),
    deleteObjectEditFlow()
  ]);
}