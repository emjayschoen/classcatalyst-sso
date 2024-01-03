import styled from 'styled-components';

// Example of style collection
// this is imported and exported in ./index.js

// Usage
// <Grid>
//   <GridHead>
//     <GridHeader>Title</GridHeader>
//   </GridHead>
//   <GridRow>
//     <GridCell>
//       <GridText>Text</GridText>
//     </GridCell>
//   </GridRow>
// </Grid>

const Grid = styled.div`
  padding: ${(props) => props.theme.padding.small};
`;

export const GridHead = styled.div`
  border-bottom-width: 1;
  border-color: #ccc;
`;

export const GridHeader = styled.div`
  font-weight: bold;
`;

export const GridRow = styled.div`
  flex-direction: row;
  border-bottom-width: 1;
  border-color: #eee;
  padding: ${(props) => props.theme.padding.small};
`;

export const GridCell = styled.div`
  padding: ${(props) => props.theme.padding.small};
`;

export const GridText = styled.div`
  color: #999;
`;

export default Grid;
