import setCookie from './setCookie';
const login = () => {

    const form = document.getElementById("subscribe-form");
    let USER_NAME = setCookie("USER_NAME", form.name.value);
    let USER_EMAIL = setCookie("USER_EMAIL", form.email.value);

    return {
        USER_NAME: USER_NAME,
        USER_EMAIL: USER_EMAIL
    }
};

export default login;