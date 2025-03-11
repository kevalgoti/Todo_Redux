'use client'
import { useMutation, useQuery } from "@tanstack/react-query";
import { setTodos, addTodo as reduxAddTodo } from "../store/features/reactQuerySlice";

export const fetchTodo = (dispatch) => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      dispatch(setTodos(data));
    },
  });
};

export const addTodo = (dispatch, queryClient) => {
  return useMutation({
    mutationFn: async (newTodo) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      return response.json();
    },
    onSuccess: (data) => {
      dispatch(reduxAddTodo(data));
      queryClient.invalidateQueries(["todos"]);
    },
  });
};
