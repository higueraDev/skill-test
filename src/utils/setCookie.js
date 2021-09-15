
const setCookie = (name,value) => {
    
    const d = new Date();
    d.setTime(d.getTime() + (5*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";

};

export default setCookie;