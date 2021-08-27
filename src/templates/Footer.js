import Logo from '../assets/title2x.png'

const Footer = () => {
    const view = `
        <div class="container-xl">
            <div class="footer__logo">
                <img
                    class="logo"
                    src="${Logo}"
                    alt="Rick &amp; Morty Logo"
                />
            </div>
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