import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

/**
 * Our basic button
 * @type {StyledComponentClass<JSX.IntrinsicElements["button"], any, P>}
 */
const Button = styled.button`
  appearance: none;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  display: inline-block;
  font-family: ${theme.font.serif.regular};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms ease-in;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${theme.color.action};
    color: ${theme.color.textLight};
  }

  &:disabled {
    background-color: ${theme.color.secondary.light};
    color: ${theme.color.secondary.default} !important;
    cursor: not-allowed;

    &:hover {
      background-color: ${theme.color.secondary.light};
      color: ${theme.color.secondary.default} !important;
    }
  }

  ${({ buttonType }) => {
    switch (buttonType) {
      default:
      case 'primary':
        return `
          background-color: ${theme.color.action};
          color: ${theme.color.text.light} !important;

          &:hover {
            background-color: ${theme.color.actionHover};
            border: 0;
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.color.secondary.default};
          color: ${theme.color.text.light} !important;

          &:hover {
            background-color: ${theme.color.secondary.light};
            border: 0;
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: inherit;
          border-bottom: 2px solid ${theme.color.action};
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0.75rem 1.5rem;

          &:hover {
            background-color: transparent;
            border-color: ${theme.color.primary.default};
            color: ${theme.color.primary.default} !important;
          }
        `;
    }
  }};
`;

Button.propTypes = {
  /**
   The style of button to render
  */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'text', 'success', 'info', 'danger', 'warning']),
};
Button.defaultProps = {
  buttonType: 'primary',
};

/** @component */
export default Button;
