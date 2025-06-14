import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';

const Home = lazy(() => import('./pages/Home.jsx'));
const Rates = lazy(() => import('./pages/Rates.jsx'));

export const App = () => {
  return (
    <>
      <Heading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
