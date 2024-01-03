import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Field } from 'redux-form/immutable';
import TextField from './text_field';
import EditorFieldWrapper from './editor_field';
import ReactSelect from './react_select';

// eslint-disable-next-line react/jsx-props-no-spreading
const SelectField = ({ options, ...props }) => <Field options={options.toJS()} {...props} component={ReactSelect} />;

SelectField.propTypes = {
  options: PropTypes.instanceOf(List).isRequired,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const EditorField = (props) => <Field {...props} component={EditorFieldWrapper} />;

export { TextField, SelectField, EditorField };
