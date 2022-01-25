import React, { useState, useReducer, useContext } from 'react';


export const myContext = React.createContext();

export default function LearnContext() {

const [theme, setTheme] = useState(true);

    const togTheme = () => {
        setTheme(!theme);
    }

    return (<div>
        <myContext.Provider value = {theme}>
        <button onClick={togTheme}>Toggle</button>
        
        </myContext.Provider>
    </div>
    )
}