import React from 'react'
import NavBar from './nav/NavBar'
import SongContainer from './song/SongContainer'
import Login from './nav/Login'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/songs">
                        <SongContainer />
                    </Route>
                    <Route path="/quiz">
                        <SongContainer />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div> 
        </Router>
   );
}

export default App;
