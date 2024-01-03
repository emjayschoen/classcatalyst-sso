import { connect } from 'react-redux';
import { getCurrentUser } from '../../../reducer';
import RegisterForm from './register_form';
import { register } from '../../actions';

const mapStateToProps = (state) => ({
  signedIn: getCurrentUser(state).signedIn,
});

const mapDispatchToProps = {
  onSubmit: (info) => register(info.toJS()),
};

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default RegisterContainer;
