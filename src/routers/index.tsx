import { useEffect } from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import { AboutPomodoroPage, HomePage, NotFoundPage } from '../pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoroPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
