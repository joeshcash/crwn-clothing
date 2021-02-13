import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../store/reducers/shop/shop.actions";

import Shop from "./shop";

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const ShopContainer = connect(null, mapDispatchToProps)(Shop);

export default ShopContainer;
