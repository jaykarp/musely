import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotesProvider } from './NotesContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <NotesProvider>
        <Router>
            <App />
        </Router>
    </NotesProvider>,
    document.getElementById('root')
);
