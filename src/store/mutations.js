const uniqid = require('uniqid');

const STORAGE_KEY = 'todo-storage';
export default {
  ADD_ITEM(state) {
    state.items.unshift({
      id: uniqid('todo-'),
      text: state.todoInput.inputText,
      isChecked: false,
      editText: false,
      deleteClass: false,
    });
    state.todoInput.inputText = '';
  },
  DELETE_ITEM(state, payload) {
    state.items = state.items.filter((item) => item.id !== payload.id);
  },
  DELETE_ALL(state) {
    state.items = [];
  },
  CHECK_ALL(state) {
    state.items.map((_item) => {
      const item = _item;
      item.isChecked = true;
      return item;
    });
  },
  UNCHECK_ALL(state) {
    state.items.map((_item) => {
      const item = _item;
      item.isChecked = false;
      return item;
    });
  },
  CHANGE_TODO_TEXT(state, payload) {
    state.items = state.items.map((_item) => {
      const item = _item;
      if (item.id === payload.id) {
        item.text = payload.text;
        item.editText = false;
      }
      return item;
    });
  },
  SAVE(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  },
  LOAD(state) {
    state.items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
};
