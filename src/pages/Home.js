import Hero from "../templates/Hero";
import Episodes from "../templates/Episodes"
import Characters from "../templates/Characters";
import Trailer from "../templates/Trailer";
import Banner from "../templates/Banner";

const Home = async () =>{
    const hero = null || document.getElementById('hero-section');
    const characters = null || document.getElementById('characters-section');
    const episodes = null || document.getElementById('episodes-section');
    const trailer = null || document.getElementById('trailer-section');
    const banner = null || document.getElementById('banner-section');

    hero.innerHTML = await Hero("","hide");
    characters.innerHTML = await Characters();
    episodes.innerHTML = await Episodes();
    trailer.innerHTML = await Trailer();
    banner.innerHTML = await Banner("","hide");


};

export default Home;