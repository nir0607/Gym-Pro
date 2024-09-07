// // import React from 'react';
// // import Login from './components/Login'; // Import the LoginForm component
// // import Registration from './components/Registration';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Login />
// //       <Registration/>
// //     </div>
// //   );
// // }

// // export default App;



// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Login from './components/Login';
// import Registration from './components/Registration';
// import Header from './components/Header';


// const App = () => {
//   return (
//     <>
//         <Header/>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/registration" element={<Registration />} />
//       </Routes>
//     </Router>
//     </>

//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Registration from './components/Registration';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
