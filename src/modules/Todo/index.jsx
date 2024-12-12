'use client';
import React, { useState } from 'react';
import DisplayTodo from './displayTodo';
import AddTodo from './addTodo';

function Todo() {
  const [currentTodo, setCurrentTodo] = useState(null);

  return (
    <div>
      <div className="addTodo">
        <AddTodo
          currentTodo={currentTodo}
          clearTodo={() => setCurrentTodo(null)}
        />
      </div>
      <div>
        <DisplayTodo setEditingTodo={setCurrentTodo} />
      </div>
    </div>
  );
}

export default Todo;
