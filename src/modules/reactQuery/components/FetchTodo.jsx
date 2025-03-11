'use client'
import React from "react";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../../../api/todoApi";

function FetchTodo() {
  const dispatch = useDispatch();

  const { data: todos, isLoading, isError } = fetchTodo(dispatch);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos</p>;

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTodo;
