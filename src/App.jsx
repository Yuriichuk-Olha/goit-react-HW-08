import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

import {Layout} from '../src/components/Layout'
import {refreshUser} from '../src/redux/auth/authApi'
import { AuthNav } from './components/AuthNav/AuthNav';

const Home = lazy(() => import('./pages/Home'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import(('./pages/Register')))
//import { Contacts } from './pages/Contacts';
//import {Home} from '../src/pages/Home'
//import {Register} from '../src/pages/Register'
//import {Login} from '../src/pages/Login'

export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
    <AuthNav/>
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<Home />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/contacts' element={<Contacts />}/>

      <Route path='*' element={<div>Not Found Page</div>}/>
    </Routes>
    <Contacts/>
  </>
  );
};
