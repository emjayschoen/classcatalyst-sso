import styled from 'styled-components';

export const Select = styled.div`
  padding: 10px;
  background-color: #fff;
`;

export const DropzoneWrapper = styled.div`
  .dropzone {
    border: dashed 3px #979797;
    border-radius: 6px;
    padding: 15px 25px;
    width: 100%;
    margin: 0;
    z-index: 2;
    cursor: pointer;
  }

  .dropzone-active {
    border-color: #blue;
  }

  .dropzone-reject {
    border-color: #ff7062;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  label {
    display: block;
    font-size: 14px;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'],
  textarea,
  select {
    border-radius: 4px;
    border: solid 1px #979797;
    color: #000;
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    padding-left: 10px;
    width: 95%;

    &:focus {
      outline: none;
    }
  }

  .error,
  .warning {
    font-size: 12px;
    position: absolute;
    right: 15px;
    top: 37px;
  }

  .select-error {
    right: 50px;
  }

  .field-error {
    ::placeholder {
      color: #ff7062;
    }
  }

  .field-error,
  .error {
    color: #ff7062;
  }

  .warning {
    color: yellow;
  }

  .btn {
    background: #ff7062;
    border-radius: 100px;
    border: 0;
    color: white;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    cursor: pointer;
  }
`;

export const SelectWrapper = styled(InputGroup)`
  .field-error {
    border: solid 1px #ff7062;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background: #ff7062;
  border-radius: 6px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
`;

export const Links = styled.div`
  font-size: 14px;
  text-align: center;

  a {
    color: #ff7062;
  }
`;
