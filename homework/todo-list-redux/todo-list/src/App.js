import './styles/App.css';
import { useDispatch, useSelector } from 'react-redux';

import ToggleThemeButton from './components/ToggleThemeButton';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
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
