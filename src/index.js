import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRateing from "./Comp/StarRateing"
// import Blog from './Comp/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRateing maxRateing={5}/> */}
{/* <Blog/> */}
  </React.StrictMode>
);

