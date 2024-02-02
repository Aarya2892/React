import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../Features/Todo/TodosSlice'

export const store = configureStore({
    reducer: TodoReducer
})