'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserTodo, fetchUserTodo, selectTodos } from '../../../store/features/todoSlice';
import Button from '@/components/form/Button';

const DisplayTodo = ({ setEditingTodo, currentUserId }) => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserTodo());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  //handledelete function
  const handleDelete = (id) => {
    dispatch(deleteUserTodo(id));
  };

  return (
    <div>
      <h2>User To-Do List</h2>
      {todos && todos.result && todos.result.length > 0 ? (
        <ul>
          {todos.result
            .filter((todo) => todo.userId === currentUserId)
            .map((todo) => (
              <li key={todo.id}>
                Task: {todo.task} | Description: {todo.desc} | Email: {todo.email}
                <Button
                  type="button"
                  onClick={() => setEditingTodo(todo)}
                  className="btn-primary"
                >
                  Update
                </Button>
                <Button
                  type="button"
                  onClick={() => handleDelete(todo.id)}
                  className="btn"
                >
                  Delete
                </Button>
              </li>
            ))}
        </ul>
      ) : (
        <p>No to-dos found.</p>
      )}
    </div>
  );
};

export default DisplayTodo;
