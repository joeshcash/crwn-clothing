import { takeLatest, call, put, all } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
