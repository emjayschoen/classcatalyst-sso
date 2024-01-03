import { connect } from 'react-redux';
import NavbarView from './navbar_view';
import { getCurrentUser } from '../../../reducer';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const NavbarContainer = connect(mapStateToProps)(NavbarView);

export default NavbarContainer;
