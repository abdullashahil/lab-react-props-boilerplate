import React from 'react';
import ReactDOM from 'react-dom/client';
import '/index.css';
import App from './App.jsx';
import AppClass from "./AppClass.jsx";
import { imageData } from './Components/DataComponents.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App propt = {imageData} /> 
    <AppClass propt2 = {imageData} />  
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
