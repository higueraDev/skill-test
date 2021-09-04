import logout from "./logout";

const setCookie = async(name,value) => {
    
    document.cookie = name + "=" + value + ";" + ";path=/user-data/";

    const time = setTimeout(function(){
        if (name === "email"){
            logout();
        }
        document.cookie = name +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/user-data/;"; 
    }, 300000);
};

export default setCookie;