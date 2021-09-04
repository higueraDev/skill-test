    
    const smoothScroll =  () =>{

        const links = document.querySelectorAll("a");

        for (const link of links) {
          link.addEventListener("click", clickHandler);
        }
        
        function clickHandler(e) {
          e.preventDefault();
          const href = this.getAttribute("href");
          const offsetTop = document.querySelector(href).offsetTop;
        
          scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        }
    }
    
    export default smoothScroll;
