import React, { useCallback, useEffect, useRef, useState } from 'react';

import EditorJs from '@stfy/react-editor.js';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';
import PropTypes from 'prop-types';

import Button from '../../../components/generic/Button';
import Form from '../../../components/generic/Form';
import ScrollLayout from '../../../components/generic/layouts/ScrollLayout';
import useLocale from '../../../helpers/hooks/useLocale';
import useLocalizedForm from '../../../helpers/hooks/useLocalizedForm';
import tools from './tools';

function Document({ classes, title: defaultTitle, content, onSubmit }) {
  const editor = useRef({});
  const [title, setTitle] = useState(defaultTitle);
  const locale = useLocale();

  useEffect(() => {
    setTitle(defaultTitle);
  }, [defaultTitle]);

  const save = useCallback(async () => {
    if (!_.isEmpty(editor.current)) {
      onSubmit({
        title,
        content: _.omit(await editor.current.editor.save(), ['time']),
      });
    }
  }, [title, onSubmit]);

  const localizedForm = useLocalizedForm([
    {
      type: 'text',
      name: 'title',
      value: title,
      placeholder: 'Untitled',
      onChange: (name, value) => {
        setTitle(value);
      },
    },
  ]);

  return (
    <div className={classes.docForm}>
      <div className={classes.title}>
        <Form inputs={localizedForm} submitButton={<></>} />
      </div>
      <ScrollLayout
        orientation="vertical"
        scrollOrientation="vertical"
        className={classes.doc}
        blockSnapType="none">
        <EditorJs
          ref={editor}
          placeholder={locale('Type to add new block...')}
          tools={tools}
          data={content}
          onReady={(...data) => {
            if (!_.isEmpty(editor.current)) {
              new Undo({ editor: editor.current.editor });
              new DragDrop(editor.current.editor);
            }
            window.loadtoeditor = editor.current.editor.blocks.renderFromHTML;
          }}
        />
      </ScrollLayout>
      <Button onClick={save}>{locale('Save')}</Button>
    </div>
  );
}

Document.propTypes = {};

export default Document;
