import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import InfoUser from './components/InfoUser';
import FormsPage from './pages/FormsPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import RoomsPage from './pages/RoomsPage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/rooms' element={<RoomsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<InfoUser />} />
        <Route path='/forms' element={<FormsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
