import editorjsTable from 'editorjs-table';

class Table extends editorjsTable {
  constructor({ data, ...rest }, ...restArgs) {
    super({ data, ...rest }, ...restArgs);
  }

  static get pasteConfig() {
    return {
      tags: ['TABLE'],
    };
  }

  onPaste(event) {
    console.log(event.type);
    switch (event.type) {
      case 'tag':
        let countOfEmptyRows = -3;
        const array = [[]];
        let index = 0;
        event.detail.data.innerText.split('\n').forEach((row) => {
          if (!row.trim()) {
            countOfEmptyRows++;
            return;
          }
          if (countOfEmptyRows >= 2) {
            countOfEmptyRows = 0;
            index++;
            array[index] = [];
          }

          array[index].push(row.trimLeft());
        });

        const size = this._tableConstructor._resizeTable.call(
          this._tableConstructor,
          { content: array },
          {},
        );

        this._tableConstructor._fillTable.call(
          this._tableConstructor,
          { content: array },
          size,
        ),
          (this.wrapper.innerHTML = '');
        this.wrapper.appendChild(this._tableConstructor.htmlElement);
        break;
    }
  }
}

export default Table;
