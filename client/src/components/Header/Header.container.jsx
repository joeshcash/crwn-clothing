import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../store/reducers/cart/cart.selectors";
import { selectCurrentUser } from "../../store/reducers/user/user.selectors";

import { signOutStart } from "../../store/reducers/user/user.actions";

import Header from "./Header";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
