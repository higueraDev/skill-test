import router from './routes/index';
import smoothScroll from './utils/smoothScroll';
import styles from './styles/main.scss';
import getUser from './utils/getUser';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('load', smoothScroll);
window.addEventListener('load', getUser);
