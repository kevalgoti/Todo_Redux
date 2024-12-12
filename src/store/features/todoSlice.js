import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//get request
export const fetchUserTodo = createAsyncThunk("auth/fetchUserTodo", async () => {
    const response = await fetch(``);
    return response.json();
});

//post request
export const postUserTodo = createAsyncThunk("auth/postUserTodo", async (todo) => {
    console.log(todo)
    const response = await fetch(``, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    return response.json()
});

//put request
export const updateUserTodo = createAsyncThunk("todo/updateUserTodo", async ({ id, updatedTodo }) => {
    const response = await fetch(``, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
    });
    return response.json();
});

// Delete Todo
export const deleteUserTodo = createAsyncThunk("todo/deleteUserTodo", async (todoId) => {
    const response = await fetch(``, {
        method: "DELETE",
    });
    return response.json();
});


const initialState = {
    userTodo: [],
    status: "idle",
    error: null,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //fetch todo
        builder
            .addCase(fetchUserTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userTodo = action.payload;
            })
            .addCase(fetchUserTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

        //add todo
        builder
            .addCase(postUserTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(postUserTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userTodo.push(action.payload);

            })
            .addCase(postUserTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

        //update todo
        builder
            .addCase(updateUserTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateUserTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                const updatedTodo = action.payload;
                const index = state.userTodo.findIndex(todo => todo.id === updatedTodo.id);
                if (index !== -1) {
                    state.userTodo[index] = updatedTodo;
                }
            })
            .addCase(updateUserTodo.rejected, (state, action) => {

                state.status = "failed";
                state.error = action.error.message;
            });

        //delete todo
        builder
            .addCase(deleteUserTodo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteUserTodo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userTodo = state.userTodo.filter((todo) => todo.id !== action.payload.id);
            })
            .addCase(deleteUserTodo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
})

export const { } = todoSlice.actions;
export const selectTodos = (state) => state.todo.userTodo;
export default todoSlice.reducer;