import React, { useState, useReducer } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    NEW_TODO: 'NEW_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

function reducer(todo, action) {
    switch (action.type) {
        case 'NEW_TODO': {
            return [...todo, newTodo(action.payload.name)]
        }
        case 'TOGGLE_TODO': {
            return todo.map(data => {
                if (data.id === action.payload.id) {
                    return { ...data, complete: !data.complete }
                }
                return data;
            }
            )
        }
        case 'DELETE_TODO': {
            return todo.filter(data => data.id !== action.payload.id)
        }
        default:{
            return todo;
        }
    }
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}

export default function LearnReducer() {

    const [todo, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const setIncrement = () => {
        //dispatch({ type: ACTIONS.INCREMENT });
    }

    const setDecrement = () => {
        //dispatch({ type: ACTIONS.DECREMENT });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.NEW_TODO, payload: { name: name } });
        setName('');
    }

    console.log('todos', todo);
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </form>
        {
            todo.map((data) => {
                return <Todo key={data.id} todo={data} dispatch={dispatch} />
            })
        }
    </div>
    )
}