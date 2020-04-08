import * as React from 'react';
import logo from './logo.svg';
import './home.css';

function Home() {
    const [currentTime, setCurrentTime] = React.useState(0);

    React.useEffect(() => {
        fetch('/api/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);

    // React.useEffect(() => {
    //     // @ts-ignore
    //     fetch('/api/is_token_valid',{
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({token: "mytoken"})
    //     }).then(res => res.json()).then(data => {
    //         console.log(data);
    //     });
    // }, []);

    return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>The current time is {currentTime}.</p>
            </header>
    );
}

export default Home;
