import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// If you wanna see what the heck is going on in the store,
// but your chrome devtools arent working :()
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App style={{ height: '100%' }} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
