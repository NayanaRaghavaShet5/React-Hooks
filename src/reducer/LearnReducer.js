import React, { useState, useReducer } from 'react';


const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT: return { count: state.count + 1 }
        case ACTIONS.DECREMENT: return { count: state.count - 1 }
        default: return state;
    }
}

export default function LearnReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const setIncrement = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    }

    const setDecrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    return (<div>
        <button onClick={setIncrement}>+</button>
        <span>{state.count}</span>
        <button onClick={setDecrement}>+</button>
    </div>
    )
}