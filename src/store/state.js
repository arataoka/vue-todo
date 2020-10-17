const uniqid = require('uniqid');

export default {
  items: [
    { id: uniqid('todo-'), text: 'TODO ITEM 1', isChecked: false, editText: false },
    { id: uniqid('todo-'), text: 'TODO ITEM 2', isChecked: false, editText: false },
    { id: uniqid('todo-'), text: 'TODO ITEM 3', isChecked: false, editText: false },
    { id: uniqid('todo-'), text: 'TODO ITEM 4', isChecked: false, editText: false },
  ],
};
