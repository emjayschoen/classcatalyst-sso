import React from 'react';
import PropTypes from 'prop-types';
import LandingPageStyles, { Hero, Content, Footer, Logo } from './landing_page_styles';
import ContactForm from '../hub_spot_form/components/contact_form';

const propTypes = {
  page: PropTypes.shape({ get: PropTypes.func }),
};

const defaultProps = {
  page: undefined,
};

const LandingPageView = ({ page }) => (
  <LandingPageStyles>
    <Logo>
      <b>CHANGEME-title</b>
    </Logo>
    <Hero>
      <Content>
        <h1>{page && page.get('header')}</h1>
        <h2>{page && page.get('subhead')}</h2>
      </Content>
    </Hero>
    <Content>
      {/* eslint-disable react/no-danger */}
      {page && <div dangerouslySetInnerHTML={{ __html: page.get('body') }} />}
      {/* eslint-enable react/no-danger */}
      <hr />
      <ContactForm />
    </Content>
    <Footer>
      <Content>&copy; Copyright CHANGEME-title 2018. All Rights Reserved.</Content>
    </Footer>
  </LandingPageStyles>
);

LandingPageView.propTypes = propTypes;
LandingPageView.defaultProps = defaultProps;

export default LandingPageView;
