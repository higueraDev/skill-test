
const setCookie = (name,value) => {
    
    var today = new Date();
    var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
  
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
};

export default setCookie;