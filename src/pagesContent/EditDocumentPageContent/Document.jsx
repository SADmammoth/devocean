import React, { useRef } from 'react';

import EditorJs from '@stfy/react-editor.js';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';
import PropTypes from 'prop-types';

import Button from '../../components/generic/Button';
import tools from './tools';

function Document({ data, onSubmit }) {
  const editor = useRef({});
  return (
    <>
      <EditorJs
        ref={editor}
        tools={tools}
        data={data}
        onReady={() => {
          if (!_.isEmpty(editor.current)) {
            new Undo({ editor: editor.current.editor });
            new DragDrop(editor.current.editor);
          }
        }}
      />
      <Button
        onClick={async () => {
          if (!_.isEmpty(editor.current)) {
            onSubmit(await editor.current.editor.save());
          }
        }}>
        Save
      </Button>
    </>
  );
}

Document.propTypes = {};

export default Document;
