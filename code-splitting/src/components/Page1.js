import React from 'react';
import logo from '../logo.svg'

const Page1 = ({onRouteChange}) => (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={() => onRouteChange('Page2')}>Page2</button>
        <button onClick={() => onRouteChange('Page3')}>Page3</button>
        <button disabled>Page1</button>

    </div>
)

export default Page1;