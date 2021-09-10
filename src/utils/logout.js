import router from '../routes/index'

const logout = () => {
    setTimeout(()=>{
        
        document.cookie = "USER_NAME=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "USER_EMAIL=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router() ;

    },300000);
};

export default logout;