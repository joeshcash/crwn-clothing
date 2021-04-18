import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/reducers/cart/cart.selectors";

import CheckoutPage from "./checkout";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const CheckoutContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutContainer;
