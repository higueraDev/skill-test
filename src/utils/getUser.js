
import Hero from "../templates/Hero";
import setCookie from "./setCookie";
import login from "./login";

const setCookies = async () => {
    const form = document.getElementById("subscribe-form");
    const name = form.name.value;
    const email = form.email.value;
    setCookie("USER_NAME", form.name.value);
    setCookie("USER_EMAIL", form.email.value);
    login(name,email);
    return true;

};

const getUser = async () => {

    const hero = await Hero("","hide");
    const form = hero ? document.getElementById("subscribe-form"): 'null';
    form.addEventListener('submit', setCookies);
};

export default getUser;