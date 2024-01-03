import { connect } from 'react-redux';
import HeaderView from './header_view';
import { getCurrentUser } from '../../../reducer';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const HeaderContainer = connect(mapStateToProps)(HeaderView);

export default HeaderContainer;
