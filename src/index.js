import router from './routes/index';
import smoothScroll from './utils/smoothScroll';
import styles from './styles/main.scss';

//images on css


window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('load', smoothScroll);
