import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../store/reducers/directory/directory.selectors";

import Directory from "./Directory";

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const DirectoryContainer = connect(mapStateToProps)(Directory);

export default DirectoryContainer;
