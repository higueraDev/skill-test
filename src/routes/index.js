import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': '/',
    '/home' : '/',
    '/index': '/',
}

const router  = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const logged = null || document.getElementById('subscribe-form');

    if(!logged){

        header.innerHTML = await Header("","hide");
        footer.innerHTML = await Footer();
        
    } 

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404();
    console.log(route);

    if(render === '/' && !logged){
        Home();
    } 

}

export default router;