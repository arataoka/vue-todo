export default {
  items: (state) => state.items,
  text: (state) => state.text,
  displayedItems: (state) => {
    if (state.todoFilter.selectedValue === 'Complete') return state.items.filter((item) => item.isChecked);
    if (state.todoFilter.selectedValue === 'Incomplete') return state.items.filter((item) => !item.isChecked);
    return state.items;
  },
};
