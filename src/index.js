import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ResultProvider } from './components/context/ResultProvider';



const root = ReactDOM.createRoot(
  document.getElementById('root'));
const app = (
  <ResultProvider>
    <Router>
      <App />
    </Router>
  </ResultProvider>
)

root.render(app);