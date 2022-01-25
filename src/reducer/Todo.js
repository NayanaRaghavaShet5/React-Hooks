import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ACTIONS } from './LearnReducer_todo'

const Todo = ({ todo, dispatch}) => {

    return (
        <div>
            <span style={{color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick = {() => {dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}}>TOGGLE</button>
            <button onClick = {() => {dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}}>DELETE</button>
        </div>
    );
}


export default Todo;