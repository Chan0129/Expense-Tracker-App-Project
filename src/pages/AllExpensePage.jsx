import MainHeader from '../components/Header/MainHeader';
import { useLocation } from 'react-router-dom';
import AllExpenseTab from '../components/Label/AllExpenseTab';
import AllIncomeTab from '../components/Label/AllIncomeTab';

import UseToggle from '../Hook/UseToggle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/authOperations';

const AllExpensePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  const location = useLocation();
  const pathname = location.pathname;

  const { showModal, toggleModal } = UseToggle();

  const dynamicTab = () => {
    if (pathname === '/all-expense') {
      return (
        <AllExpenseTab
          title="All Expense"
          showModal={showModal}
          toggleModal={toggleModal}
        />
      );
    }
    if (pathname === '/all-income') {
      return (
        <AllIncomeTab
          title="All Income"
          showModal={showModal}
          toggleModal={toggleModal}
        />
      );
    }
  };

  return (
    <>
      <MainHeader toggleModal={toggleModal} />
      {dynamicTab()}
    </>
  );
};

export default AllExpensePage;
