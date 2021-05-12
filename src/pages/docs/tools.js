import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import { ItalicInlineTool, UnderlineInlineTool } from 'editorjs-inline-tool';

export default {
  italic: ItalicInlineTool,
  underline: UnderlineInlineTool,
  embed: Embed,
  table: { class: Table, inlineToolbar: true },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: { class: List, inlineToolbar: true },
  warning: { class: Warning, inlineToolbar: true },
  code: Code,
  linkTool: { class: LinkTool, inlineToolbar: true },
  image: Image,
  header: Header,
  quote: { class: Quote, inlineToolbar: true },
  marker: { class: Marker, inlineToolbar: true },
  checklist: { class: CheckList, inlineToolbar: true },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
