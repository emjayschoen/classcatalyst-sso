import { connect } from 'react-redux';
import ProfileForm from './profile_form';
import { getCurrentUser } from '../../../reducer';
import { updateCurrentUser } from '../../../session/actions';

const mapStateToProps = (state) => {
  const user = getCurrentUser(state);
  const { email, firstName, lastName } = user;
  return {
    authToken: user.authToken,
    name: user.name,
    initialValues: {
      firstName,
      lastName,
      email,
    },
  };
};

const mapDispatchToProps = {
  onSubmit: updateCurrentUser,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  onSubmit: (props) => dispatchProps.onSubmit(stateProps.authToken, props),
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProfileForm);

export default ProfileContainer;
