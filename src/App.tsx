import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Gallery from './pages/gallery/gallery';
import Events from './pages/events/events';
import ContactUs from './pages/contactus/contactus';
import Footer from './pages/appfooter/footer';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

function App() {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <NavLink className="navbar-brand bold" to="/">Kahrade Brahmin Santha, Badlapur</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">{t('navbar.home')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">{t('navbar.services')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/events">{t('navbar.events')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">{t('navbar.gallery')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">{t('navbar.contactus')}</NavLink>
              </li>
            </ul>
            <Dropdown align="end" className="language-dropdown">
              <Dropdown.Toggle variant="secondary" className="language-dropdown" id="dropdown-custom-components">
                {language === 'en' ? 'English' : 'मराठी'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage('en')}><small>English</small></Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('mr')}><small>मराठी</small></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
