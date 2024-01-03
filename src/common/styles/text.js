import styled from 'styled-components';

// header style
export const Header = styled.div`
  font-family: ${(props) => props.theme.font.sansSerif};
  font-size: ${(props) => props.theme.text.fontSize * 2};
`;

// subhead style
export const Subhead = styled.div`
  font-family: ${(props) => props.theme.font.sansSerif};
  font-size: ${(props) => props.theme.text.fontSize * 1.5};
`;

// body style
export const Body = styled.div`
  font-family: ${(props) => props.theme.font.sansSerif};
  font-size: ${(props) => props.theme.text.fontSize};
`;

// note style
export const Note = styled.div`
  font-family: ${(props) => props.theme.font.sansSerif};
  font-size: ${(props) => props.theme.text.fontSize * 0.9};
  color: ${(props) => props.theme.color.textLight};
`;
