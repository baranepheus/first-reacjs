import React from 'react'

/* Styles */

import './App.css'

/* Components */
import Card from './Card'

const App = () => {

    return(
        <div className='app-main'>
            <Card name="Erika" age={22} gender="Female"/>
            <Card name="Denji" age={16} gender="Male"/>
            <Card name="Reze" age={16} gender="Female"/>
            <Card name="Power" age={16} gender="Female"/>
        </div>
    )
}

export default App