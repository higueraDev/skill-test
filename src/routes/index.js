import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Cards from '../pages/Cards';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Cards,
    '/:id': Cards
}

const router  = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const cards = null || document.getElementById('cards-container');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    cards.innerHTML = await render();

}

export default router;