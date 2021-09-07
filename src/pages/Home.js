import Hero from "../templates/Hero";
import Episodes from "../templates/Episodes"
import Characters from "../templates/Characters";
import Trailer from "../templates/Trailer";
import Banner from "../templates/Banner";
import getCookie from "../utils/getCookie";

const Home = async () =>{
    let USER_NAME = getCookie('USER_NAME');
    let USER_EMAIL = getCookie('USER_EMAIL');

    let status = USER_NAME ? true : false;
    console.log(status);

    const hero = await Hero(status, USER_NAME);
    const banner = await Banner(status,USER_EMAIL);

    const characters = await Characters();
    const episodes = await Episodes();
    const trailer = await Trailer();

    const view = `
        <section id="hero-section" class="section hero">${hero}</section>
        <div id="characters-section" class="section characters-section">${characters}</div>
        <div id="episodes-section" class="section episodes-section">${episodes}</div>
        <div id="trailer-section" class="section trailer-section">${trailer}</div>
        <div id="banner-section" class="section banner-section">${banner}</div>
    `;

    return view;


};

export default Home;