import styled from 'styled-components';
// import theme from '../theme';

const RegisterStyles = styled.div`
  .status {
    margin: 0 1em;
  }
  .error {
    color: ${(props) => props.theme.color.error};

    input[type='text'],
    input[type='password'] {
      border: thin solid ${(props) => props.theme.color.error};
    }
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

export default RegisterStyles;
