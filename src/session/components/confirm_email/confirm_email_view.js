import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Util } from '@protastudios/prota-core-react';
import ConfirmEmailStyles from './confirm_email_styles';
import Spinner from '../../../common/components/spinner';

const { useApiCall } = Util;

const propTypes = {
  confirmEmail: PropTypes.func.isRequired,
};

const ConfirmEmailView = ({ confirmEmail }) => {
  const [doConfirm, { submitting, failed, success }] = useApiCall(confirmEmail);
  useEffect(() => {
    doConfirm();
  }, [doConfirm]);

  let content;
  if (submitting) {
    content = <Spinner />;
  } else if (success) {
    content = <p>Your email has been verified.</p>;
  } else if (failed) {
    content = <p>We were unable to verify your email. Please check your email and ensure you followed the correct link.</p>;
  } else {
    content = <p>Foo</p>;
  }

  return <ConfirmEmailStyles>{content}</ConfirmEmailStyles>;
};

ConfirmEmailView.propTypes = propTypes;

export default ConfirmEmailView;
