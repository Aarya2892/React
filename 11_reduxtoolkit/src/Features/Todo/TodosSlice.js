import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id:1,
        text:"Hello World"
    }]
}

export const TodosSlice = createSlice({
    name: 'todo', 
    initialState,
    //create reducers which contain only two value state and action 
    reducers: {
        addtodo: (state, action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removetodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        // updatetodo: (state, action)=>{
        //     state.todos = state.todos.map((todo)=> (todo.id ===id ? action.payload : todo))
        // }
    }
})

//export reducers seperately
export const {addtodo, removetodo, updatetodo} = TodosSlice.actions

//export slice seperately
export default TodosSlice.reducer