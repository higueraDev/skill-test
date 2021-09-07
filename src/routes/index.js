import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import getUser from '../utils/getUser';
import getCookie from '../utils/getCookie';
import logout from '../utils/logout'

const routes = {
    '/': Home(),
}


const router  = async () => {
    console.log("ROUTER");
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const main = null || document.getElementById('main');
    let USER_NAME = getCookie('USER_NAME');
    let status = USER_NAME ? true : false;

    header.innerHTML = await Header(status, USER_NAME);
    footer.innerHTML = await Footer();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404();
    main.innerHTML = await render;
    
    if (status){
        logout()
    } else{
        main.innerHTML = await Home();
        getUser()
    }
     
}

export default router;