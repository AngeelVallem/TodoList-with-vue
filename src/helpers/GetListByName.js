import {todos} from '../db/data';

export const getTodosbyName = (nameList) =>{
    return todos.filter(n => n.nameList === nameList);
}