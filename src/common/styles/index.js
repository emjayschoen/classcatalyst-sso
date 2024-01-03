// import styled from 'styled-components';

// think of this as your global.css file
// All components defined here should only be styles
// These components should not have props or interaction
// props.theme comes from App.js ThemeProvider

// import and export additinal components from this folder

import Grid, { GridHead, GridHeader, GridRow, GridCell, GridText } from './grid';
import { Page, Hero, Footer, Section } from './layout';
import { Header, Subhead, Body, Note } from './text';

// Export styled coponents

export {
  // Grid
  Grid,
  GridHead,
  GridHeader,
  GridRow,
  GridCell,
  GridText,
  // Layout
  Page,
  Hero,
  Footer,
  Section,
  // Text
  Header,
  Subhead,
  Body,
  Note,
};

// Other potential styles to define here

// - FormField
// - FormInput
// - Carousel
// - Card
