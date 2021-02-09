import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../store/reducers/shop/shop.actions";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

import CollectionPage from "../collection/collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionsRef = firestore.collection("collections");

    collectionsRef.get().then((snapshot) => {
      const collectionsMap = converCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      setLoading(false);
    });

    return () => {
      if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
    };
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
