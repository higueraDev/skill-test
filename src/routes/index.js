import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Home from '../pages/Home';
import getUser from '../utils/getUser';
import getCookie from '../utils/getCookie';
import logout from '../utils/logout'

const routes = {
    '/': Home(),
}


const router  = async () => {
    const header = null || document.getElementById('header');
    const footer = null || document.getElementById('footer');
    const main = null || document.getElementById('main');
    let USER_NAME = getCookie('USER_NAME');
    let status = USER_NAME ? true : false;

    header.innerHTML = await Header(status, USER_NAME);
    footer.innerHTML = await Footer();
    main.innerHTML = await Home();

    
    if (status){
        logout()
    } else{
        getUser()
    }
     
}

export default router;