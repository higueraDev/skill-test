
const setCookie = (name,value) => {
    
    return document.cookie = name + "=" + value + ";" + ";path=/;";

};

export default setCookie;