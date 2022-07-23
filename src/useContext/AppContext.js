import React, { useContext } from 'react';
import Context from './Context';
import { ThemeContext } from './ThemeContext';

const AppContext = () => {

    const context = useContext(ThemeContext)
    return (
        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Context></Context>
        </div>
    );
}

export default AppContext;
