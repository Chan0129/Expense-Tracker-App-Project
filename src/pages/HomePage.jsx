import InitialHeader from '../components/Header/Logo';
import Home from '../components/HomePage/Home';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/authOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return (
    <>
      <InitialHeader />
      <Home />
    </>
  );
};

export default HomePage;
