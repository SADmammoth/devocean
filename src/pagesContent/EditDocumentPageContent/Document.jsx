import React, { useCallback, useRef, useState } from 'react';

import EditorJs from '@stfy/react-editor.js';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';
import PropTypes from 'prop-types';

import Button from '../../components/generic/Button';
import Form from '../../components/generic/Form';
import tools from './tools';

function Document({ classes, title: defaultTitle, content, onSubmit }) {
  const editor = useRef({});
  const [title, setTitle] = useState(defaultTitle);

  const save = useCallback(async () => {
    if (!_.isEmpty(editor.current)) {
      onSubmit({ title, content: await editor.current.editor.save() });
    }
  }, [title]);

  return (
    <div className={classes.docForm}>
      <div className={classes.title}>
        <Form
          inputs={[
            {
              type: 'text',
              name: 'title',
              value: title,
              placeholder: 'Untitled',
              onChange: (name, value) => {
                //   if (!value || !value.trim()) {
                //     setTitle('Untitled');
                //     return;
                //   }
                setTitle(value);
              },
              attributes: {
                autoComplete: 'off',
              },
            },
          ]}
          submitButton={<></>}
        />
      </div>
      <div className={classes.doc}>
        <EditorJs
          ref={editor}
          placeholder={'Type to add new block...'}
          tools={tools}
          data={content}
          onReady={() => {
            if (!_.isEmpty(editor.current)) {
              new Undo({ editor: editor.current.editor });
              new DragDrop(editor.current.editor);
            }
          }}
        />
      </div>
      <Button onClick={save}>Save</Button>
    </div>
  );
}

Document.propTypes = {};

export default Document;
