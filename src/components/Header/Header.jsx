import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MdCurrencyExchange } from 'react-icons/md';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { setBaseCurrency } from '../../redux/currencySlice';

const Header = () => {
  const addActive = ({ isActive }) => (isActive ? styles.active : styles.link);
  const baseCurrency = useSelector(state => state.currency.baseCurrency);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink to="/" className={addActive}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rates" className={addActive}>
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
