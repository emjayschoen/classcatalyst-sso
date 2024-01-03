import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditorField extends Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    defaultValue: PropTypes.string,
  };

  static defaultProps = {
    isLoading: false,
    readOnly: false,
    defaultValue: undefined,
  };

  constructor(props) {
    super(props);
    const { onChange } = props.input;
    this.state = { editorState: EditorState.createEmpty() };
    const { editorState } = this.state;
    onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }

  onEditorStateChange = (editorState) => {
    const { input } = this.props;
    const { onChange, value } = input;

    const newValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    if (value !== newValue) {
      onChange(newValue);
    }

    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    const { readOnly, isLoading, defaultValue } = this.props;
    return (
      <div>
        <Editor
          editorEnabled={!readOnly && !isLoading}
          editorState={editorState}
          rawContentState={defaultValue}
          wrapperClassName="wrapper"
          editorClassName="editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    );
  }
}

export default EditorField;
