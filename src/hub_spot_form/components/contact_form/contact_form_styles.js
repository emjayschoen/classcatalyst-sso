import styled from 'styled-components';
import theme from '../../../common/theme';

const ContactFormStyles = styled.div`
  margin: 40px 0;
  .btn {
    background: ${theme.color.action};
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1em;
    padding: 15px 20px;
    float: right;
    cursor: pointer;
    &:hover {
      background: ${theme.color.actionHover};
    }
  }
  h2 {
    margin-bottom: 10px;
  }
`;

export default ContactFormStyles;
