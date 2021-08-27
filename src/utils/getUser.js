
import setCookie from "./setCookie";

const getUser = () => {
    let form = document.getElementById("submit-form");
    setCookie("name", form.name.value);
    setCookie("email", form.email.value);
    return true;

};

export default getUser;