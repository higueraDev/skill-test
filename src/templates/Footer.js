const Footer = () => {
    const view = `
    <footer class="footer">
        <div class="container-xl">
            <div class="footer__logo">
                <img
                    class="logo"
                    src="assets/title.png"
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
    </footer>
    `;
    return view;
};

export default Footer;