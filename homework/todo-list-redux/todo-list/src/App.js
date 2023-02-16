import './styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ToggleThemeButton from './components/ToggleThemeButton';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { getTodos } from './store/slices/todoSlice';

function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  const theme = useSelector(state => state.theme);
  return (
    <div className={theme==="light" ? "todo--container-light" : "todo--container-dark"}>
      <ToggleThemeButton />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
