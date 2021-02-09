import React from "react";
import { withRouter } from "react-router-dom";

import "./CollectionPreview.styles.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1
        onClick={() => history.push(`${match.path}/${routeName}`)}
        className="title"
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
