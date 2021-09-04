import Header from "../templates/Header";
import Hero from "../templates/Hero";
import Banner from '../templates/Banner'

const logout = () => {
    const header = null || document.getElementById('header');
    header.innerHTML = Header("","hide");

    const hero = null || document.getElementById('hero-section');
    hero.innerHTML = Hero("","hide");

    const banner = null || document.getElementById('banner-section');
    banner.innerHTML = Banner("","hide");

};

export default logout;