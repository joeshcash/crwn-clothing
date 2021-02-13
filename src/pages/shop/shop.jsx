import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";
import CollectionContainer from "../collection/collection.container";

export const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default Shop;
