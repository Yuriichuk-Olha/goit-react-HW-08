import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

import PrivateRoute from '../src/components/PrivateRoute'
import RestrictedRoute from '../src/components/RestrictedRoute'

import {Layout} from '../src/components/Layout'
import {refreshUser} from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selector';

const Home = lazy(() => import('./pages/Home'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import(('./pages/Register')))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  //console.log(isRefreshing)
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (

   isRefreshing ? <p>Refreshing...</p> : (<> 
    
    <Layout> 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' 
          element={<RestrictedRoute component={<Register />} redirectTo='/' />}
          />
          <Route path='/login' 
          element={<RestrictedRoute component={<Login/>} redirectTo='/contacts' />}
          />
          <Route path='/contacts' 
          element={<PrivateRoute component={<Contacts/>} />} 
          />
          <Route path='*' element={<div>Sorry page not found</div>}/>
         
      </Routes>
    </Suspense>
    </Layout>

    </>)
  )
};
