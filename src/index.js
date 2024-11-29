// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Login from './Login';
// import Header from './Header';
// import Footer from './Footer';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<>
//   <Header/>
//   <h1>hello aditya</h1>
//   <p>this is a p</p>
//   <Login/>
//   <Footer/>
// </>);// there cant be to tags in one line there needs to be a parent tag // <> is a fragment acts as a parent here

import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from './Login';
// import Header from './Header'
// import Footer from './Footer';
// import Content from './Content';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <>
    <App/>

  </>
          );
// when you render there should always be a parent element, so use div <div></div> or you could use somwthing called fragment<></>
//instead of writing those login stuff here, we make components-made Login.js (L caps)