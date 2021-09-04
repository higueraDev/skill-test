import Header from "../templates/Header";
import Hero from "../templates/Hero";
import Banner from '../templates/Banner'

const login = (user,email) => {
    const header = null || document.getElementById('header');
    header.innerHTML = Header("hide","", user);

    const hero = null || document.getElementById('hero-section');
    hero.innerHTML = Hero("hide","", user);

    const banner = null || document.getElementById('banner-section');
    banner.innerHTML = Banner("hide","", email);

};

export default login;