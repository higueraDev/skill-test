import login from './login'

const getUser = () => {
    const form = null || document.getElementById("subscribe-form");
    return form.addEventListener('submit', login);
};

export default getUser;