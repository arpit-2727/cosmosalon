// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your custom CSS file
import App from './App'; // Import the main App component
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Service worker registration (optional)
// serviceWorker.unregister(); // Change to register() if you want to enable service worker for offline capabilities
