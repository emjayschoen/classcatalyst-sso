import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Util } from '@protastudios/prota-core-react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import SignIn from '../../session/components/sign_in';
import FinishSignIn from '../../session/components/finish_sign_in';
import Dashboard from './dashboard';
import Profile from './profile';
import SignOut from '../../session/components/sign_out';
import MockAuth from '../../session/components/mock_auth';
import Register from '../../session/components/register';
import ForgotPassword from '../../session/components/forgot_password';
import ResetPassword from '../../session/components/reset_password';

import ConfirmEmail from '../../session/components/confirm_email';

const { ErrorBoundary, AuthenticatedRoute } = Util;

let mockAuthRoute = null;
if (process.env.NODE_ENV !== 'production') {
  mockAuthRoute = <Route path="/mockauth/:provider/:returnTo" component={MockAuth} />;
}

const RootView = () => (
  <div>
    <Header />
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/finish_signin" component={FinishSignIn} />
        <Route path="/register" component={Register} />
        <Route path="/signout" component={SignOut} />
        <AuthenticatedRoute path="/dashboard" component={Dashboard} />
        <AuthenticatedRoute path="/profile" component={Profile} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset_password/:token" component={ResetPassword} />
        <AuthenticatedRoute path="/confirm_email/:token" component={ConfirmEmail} />
        {mockAuthRoute}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default RootView;
