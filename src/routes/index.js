import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Hero from '../pages/Hero';
import Characters from '../pages/Characters';
import Episodes from '../pages/Episodes';
import Trailer from '../pages/Trailer';
import Banner from '../pages/Banner';

import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': Characters,
    '/:id': Characters
}

const router  = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const hero = null || document.getElementById('hero-section');
    const characters = null || document.getElementById('characters-section');
    const episodes = null || document.getElementById('episodes-section');
    const trailer = null || document.getElementById('trailer-section');
    const banner = null || document.getElementById('banner-section');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
    hero.innerHTML = await Hero();
    episodes.innerHTML = await Episodes();
    trailer.innerHTML = await Trailer();
    banner.innerHTML = await Banner();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404();
    characters.innerHTML = await render();

}

export default router;