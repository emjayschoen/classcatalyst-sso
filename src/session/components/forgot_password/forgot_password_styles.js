import styled from 'styled-components';
// import theme from '../theme';

const ForgotPasswordStyles = styled.div`
  .status {
    margin: 0 1em;
  }
  .error {
    color: ${(props) => props.theme.color.error};
  }

  .oauth-row {
    margin: auto;
    width: fit-content;
    padding: 1em;
  }

  .oauth-button {
    margin: 5px;
    color: ${(props) => props.theme.color.action};
    &:hover {
      color: ${(props) => props.theme.color.actionHover};
    }
  }
`;

export default ForgotPasswordStyles;
