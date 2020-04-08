import * as React from 'react';
import Main from './pages/main';
import Navbar from './components/navbar/navbar';
import './app.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
