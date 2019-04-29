import React from 'react';

//Router
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

//Pages
import HomePage from './pages/Home/Home.jsx';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={HomePage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
