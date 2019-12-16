import React from 'react'
import NavBar from './nav/NavBar'
import SongContainer from './song/SongContainer'
import Login from './nav/Login'
import Library from './library/Library'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route path="/song/:name" component={SongContainer} />
                    <Route path="/library" component={Library} />
                    <Route path="/" component={Library} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
