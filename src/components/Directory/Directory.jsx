import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../store/reducers/directory/directory.selector";

import MenuItem from "../MenuItem/MenuItem";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
