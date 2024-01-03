// Main entry point for {className} javascript
import actions, * as actionMethods from './actions';
import reducer, * as selectors from './reducer';
import {className} from './{snakeName}_container.js';

// Export anything we need to reverence outside of the /{snakeName}/ namespace
export const ACTIONS = actions;
export const {className}Actions = actionMethods;
export const {className}Reducer = reducer;
export const {className}Selectors = selectors;

export default {className};
