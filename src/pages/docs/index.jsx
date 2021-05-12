import React, { useRef } from 'react';

import EditorJs from '@stfy/react-editor.js';
import Blocks from 'editorjs-blocks-react-renderer';
import DragDrop from 'editorjs-drag-drop';
import edjsParser from 'editorjs-parser';
import Undo from 'editorjs-undo';
import PropTypes from 'prop-types';
import turndownService from 'turndown';

import Button from '../../components/generic/Button';
import tools from './tools';

function Index(props) {
  const editor = useRef({});

  return (
    <>
      <EditorJs
        ref={editor}
        tools={tools}
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
            console.log(
              // new turndownService().turndown(
              //   parser.parse(
              await editor.current.editor.save(),
              //       ),
              //     ),
            );
          }
        }}>
        Save
      </Button>
    </>
  );
}

Index.propTypes = {};

export default Index;
