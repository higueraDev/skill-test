import router from './routes/index';
import smoothScroll from './utils/smoothScroll';

//images on css
import portal from './assets/portal2x.png';
import scrollIcon from './assets/scroll_icon.svg';
import check_icon from './assets/check_icon.svg';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('load', smoothScroll);
