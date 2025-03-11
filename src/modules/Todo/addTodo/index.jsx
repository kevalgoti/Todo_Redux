import Input from '../../../components/form/Input';
import Button from '../../../components/form/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserTodo } from '@/store/features/todoSlice';

function AddTodo() {
  const [todoData, setTodoData] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodoData({ ...todoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserTodo(todoData));
    setTodoData({ title: '', description: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Enter a title"
          value={todoData.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Enter a description"
          value={todoData.description}
          onChange={handleChange}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
}

export default AddTodo;
