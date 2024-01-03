import styled from 'styled-components';
// import theme from '../theme';

const HeaderStyles = styled.div`
  border: thick solid ${(props) => props.theme.color.whiteOffset};
  margin: 2em;
  padding: auto;
`;

export default HeaderStyles;
