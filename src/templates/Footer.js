import Logo from '../assets/images/title2x.png'

const Footer = () => {
    const view = `
        <div class="container-xl">
            <a href="./" class="footer__logo">
                <img
                    class="logo"
                    src="${Logo}"
                    alt="Rick &amp; Morty Logo"
                />
            </a>
            <div class="footer__legal">
                <span>&copy;</span>
                <script type="text/javascript">
                    document.write(new Date().getFullYear());
                </script>
                <span>Rick and Morty - Property of Adult Swim</span>
            </div>
        </div>
    `;
    return view;
};

export default Footer;