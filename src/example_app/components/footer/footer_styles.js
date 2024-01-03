import styled from 'styled-components';

const FooterStyles = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color.textLight};
  background-color: ${(props) => props.theme.color.action};
`;

export default FooterStyles;
