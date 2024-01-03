import React from 'react';
import Header from './comps/Header';
import Login from './comps/Login';
import RegistrationForm from './comps/reg';
import Ab from './comps/Ab';
import Cont from './comps/Cont';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Header/>}/>
        <Route  path='/reg' element={<Login/>}/>
        <Route  path='/sig' element={<RegistrationForm/>}/>
        <Route exact path='/a' element={<Ab/>}/>
        <Route exact path='/c' element={<Cont/>}/>

      </Routes>
    </Router>
  );
}