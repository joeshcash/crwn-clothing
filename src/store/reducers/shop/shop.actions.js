import ShopActionTypes from "./shop.types";

import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionsRef = firestore.collection("collections");

  dispatch(fetchCollectionsStart());

  collectionsRef
    .get()
    .then((snapshot) => {
      const collectionsMap = converCollectionsSnapshotToMap(snapshot);

      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => {
      dispatch(fetchCollectionsError(error.message));
    });
};
