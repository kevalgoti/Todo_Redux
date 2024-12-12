'use client';
import React, { useState, useEffect } from 'react';
import Input from '../../../components/form/Input';
import Button from '../../../components/form/Button';
import { useDispatch } from 'react-redux';
import { postUserTodo, updateUserTodo } from '@/store/features/todoSlice';

function AddTodo({ currentTodo, clearTodo }) {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      setTask(currentTodo.task);
      setDesc(currentTodo.desc);
      setEmail(currentTodo.email);
    } else {
      setTask('');
      setDesc('');
      setEmail('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (currentTodo) {
      dispatch(updateUserTodo({ id: currentTodo.id, updatedTodo: { task, desc, email } }))
        .finally(() => {
          setIsSubmitting(false);
          clearTodo();
        });
    } else {
      dispatch(postUserTodo({ task, desc, email }))
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="task"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <Input
          type="text"
          name="desc"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
        >
          {currentTodo ? 'Save' : 'Submit'}
        </Button>

        {currentTodo && (
          <Button
            type="button"
            onClick={clearTodo}
            className="btn-secondary"
          >
            Cancel
          </Button>
        )}
      </form>
    </div>
  );
}

export default AddTodo;
