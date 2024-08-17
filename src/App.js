import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileView from './components/ProfileView';
import ProfileEdit from './components/profileEdit';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for the root path */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/profile" element={<ProfileView />} /> */}
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </Router>
  );
};

export default App;




