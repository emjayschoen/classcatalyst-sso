import React from 'react';
import FooterStyles from './footer_styles';

const emoji = (i, text) => (
  <span role="img" aria-label={text}>
    {i}
  </span>
);

const FooterView = () => (
  <FooterStyles>
    <span>
      {'© Monkey and '}
      {emoji('🍌', 'Banana')}
      {', Inc.'}
    </span>
  </FooterStyles>
);

export default FooterView;
