import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import AboutPomodoro from "../../pages/AboutPomodoro";
import HomePage from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import { useEffect } from "react";
import HistoryPage from "../../pages/History";
import SettingsPage from "../../pages/Settings";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history/' element={<HistoryPage />} />
        <Route path='/settings/' element={<SettingsPage />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
}