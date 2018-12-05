const allTodos = (state) => {
  const { todos } = state;
  return Object.keys(todos).map(id => todos[id]);
};


export default allTodos;
