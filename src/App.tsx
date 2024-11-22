import React, { useState } from 'react';
import logo from './logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Gallery from './pages/gallery/gallery';
import Events from './pages/events/events';
import ContactUs from './pages/contactus/contactus';
import Footer from './pages/appfooter/footer';
import { useTranslation } from 'react-i18next';
import { Dropdown, } from 'react-bootstrap';

function App() {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };
  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  

  return (
    <Router>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          <NavLink className="navbar-brand bold" to="/">
            <img src={logo} className="logo" alt="Kahrade Brahmin Santha, Badlapur" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse custom-navbar ${isNavCollapsed ? '' : 'show'}`}  id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleToggle} to="/">{t('navbar.home')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleToggle} to="/services">{t('navbar.services')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleToggle} to="/events">{t('navbar.events')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleToggle} to="/gallery">{t('navbar.gallery')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" onClick={handleToggle} to="/contactus">{t('navbar.contactus')}</NavLink>
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
