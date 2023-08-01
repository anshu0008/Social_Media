import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';

const App = () => {
  const navigate = useNavigate();
const [user, setUser] = useState(false);
// const [, set] = useState(second)

useEffect(()=>{
 const chesck=localStorage.getItem('user');

 if(chesck) setUser(true);
})


  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to='/' />  : <Login />} />
      <Route path="/*" element={user ? <Home /> : <Navigate to='/login' />} />
    </Routes>
  );
};

export default App;