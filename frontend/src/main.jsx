
// // // // import React from 'react'
// // // // import ReactDOM from 'react-dom/client'
// // // // import App from './App.jsx'
// // // // import './index.css'

// // // // if ('serviceWorker' in navigator) {
// // // //   navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister()));
// // // //   caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
// // // // }

// // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // root.render(
// // // //   <React.StrictMode>
// // // //     <div style={{ padding: 16, color: '#000' }}>
// // // //       <h1>React mounted — debug</h1>
// // // //       <App />
// // // //     </div>
// // // //   </React.StrictMode>
// // // // )
// // // // Temporary test: bypass React entirely
// // // document.body.innerHTML = `
// // //   <div style="padding:24px;color:#000;background:#fff;font-family:Arial;font-size:20px">
// // //     <h1>PLAIN DOM TEST - DEV SERVER IS WORKING</h1>
// // //     <p>If you see this, Vite is serving files correctly.</p>
// // //   </div>
// // // `;

// // // ...existing code...
// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// // import './index.css'

// // if ('serviceWorker' in navigator) {
// //   navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
// //   caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // console.log('About to render React App...');
// // root.render(
// //   <React.StrictMode>
// //     <div style={{ padding: 16, color: '#000' }}>
// //       <h1>React Mounted - Debug</h1>
// //       <App />
// //     </div>
// //   </React.StrictMode>
// // )
// // // ...existing code...

// // ...existing code...
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import './index.css'
// import { AuthProvider } from './context/authContext.js';



// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
//   caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <AuthProvider>
//       <App />
//       </AuthProvider>
//    </BrowserRouter>
//   </React.StrictMode>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';
import App from './App.jsx';
import './index.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
  caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);