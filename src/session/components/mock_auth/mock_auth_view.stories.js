import React from 'react';
import MockAuthView from './mock_auth_view';

export default {
  title: 'session/MockAuthView',
  component: MockAuthView,
};

export const normal = () => (
  <MockAuthView
    match={{
      params: { provider: 'some other network', returnTo: encodeURIComponent('/lalaland') },
    }}
  />
);

normal.parameters = {
  notes: 'this is a silly test component...',
};

export const noReturnTo = () => <MockAuthView match={{ params: { provider: 'DairyKing' } }} />;

noReturnTo.storyName = 'no returnTo';

noReturnTo.parameters = {
  notes: 'this is a silly test component...',
};

export const fullUrl = () => <MockAuthView match={{ params: { provider: 'jojo', returnTo: encodeURIComponent('https://hack.me/deeply') } }} />;

fullUrl.storyName = 'full url';

fullUrl.parameters = {
  notes: 'I suppose the value of returnTo only matters in the FinishSignIn component',
};
