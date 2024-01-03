import styled from 'styled-components';
// import theme from '../theme';

const LandingPageStyles = styled.div``;

export const Hero = styled.div`
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    background: url(/assets/hero.jpg) center center no-repeat;
    background-size: cover;
    /* opacity: 0.5; */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  h1 {
    font-size: 3em;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
  }
  h2 {
    font-weight: normal;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  padding: 10px 40px;
  background: #000;
  color: #fff;
  font-size: 1.5em;
  z-index: 2;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 100px auto;
`;

export const Footer = styled.div`
  margin-top: 200px;
  font-size: 0.8em;
  color: #999;
`;

export default LandingPageStyles;
