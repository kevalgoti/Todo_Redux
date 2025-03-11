'use client';
import DisplayTodo from './displayTodo';
import AddTodo from './addTodo';

function Todo() {

  return (
    <div>
      <div className="addTodo">
        <AddTodo/>
      </div>
      <div>
        <DisplayTodo  />
      </div>
    </div>
  );
}

export default Todo;
