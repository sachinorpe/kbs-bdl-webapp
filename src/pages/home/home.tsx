import React from 'react';
import "./home.css";
import { useTranslation } from 'react-i18next';
import HomeCarousel from './home-corosal';

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="home-bg pt-2">
            <HomeCarousel />
            <div className="home-content justify-content-center align-items-center">
                <b>{t('home_page.home_title')}</b><br/><br/>
                <p>{t('home_page.home_content_para1')}</p>
                <p>{t('home_page.home_content_para2')}</p>
                <p>{t('home_page.home_content_para3')}</p>
                <p>{t('home_page.home_content_para4')}</p>
                <p>{t('home_page.home_content_para5')}</p>
                
            </div>
        </div>

    );
};

export default Home;