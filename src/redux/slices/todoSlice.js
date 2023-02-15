const initState = [
  {
    'content': 'Finish homework',
    'id': 1
  },
  {
    'content': 'Get a job',
    'id': 2
  },
  {
    'content': 'Get rich',
    'id': 3
  }
];

export function todoReducer(state = initState, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'edit':
      return state.map(todo => {
        if(todo.id === action.payload.id) {
          todo.content = action.payload.content;
          return todo;
        }
        return todo;
       });
    default:
      return state;
  }
}

export function addAction(newTodo) {
  return { type: 'add', payload: newTodo};
}

export function removeAction(removeId) {
  return { type: 'remove', payload: removeId };
}

export function editAction({ id, content }) {
  return { type: 'edit', payload: { id: id, content: content}};
}
