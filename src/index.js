import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/header_footer';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';
let props = {name: "hello", pub_ancor: "https://www.megagon.ai/", blog_link: "https://www.megagon.ai/"}

ReactDOM.render(
  <React.StrictMode>
    <Main {...props}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
