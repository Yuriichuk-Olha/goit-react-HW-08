import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

import RestrictedRoute from '../src/components/RestrictedRoute'
import PrivateRoute from '../src/components/PrivateRoute'

import {Layout} from '../src/components/Layout'
import {refreshUser} from '../src/redux/auth/authApi'

import { AuthNav } from './components/AuthNav/AuthNav';
import { selectIsRefreshing } from './redux/auth/selector';

const Home = lazy(() => import('./pages/Home'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import(('./pages/Register')))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing){
    return null
  }
  return (
    <>
    <AuthNav/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>

      <Route path='/register' 
      element={<RestrictedRoute component={<Register />} redirectTo='/' />}
      />
      <Route path='/login' 
      element={<RestrictedRoute component={<Login/>} redirectTo='/contacts' />}
      />
      <Route path='/contacts' 
      element={<PrivateRoute component= {<Contacts />}/>} 
      />
      <Route path='*' element={<div>Sorry page not found</div>}/>
      </Route>
    </Routes>
  </>
  );
};
