import Logo from '../assets/title2x.png'

const Header = () => {
    const view = `
    <div class="container-xl">
        <div class="header__logo">
            <a href="/"><img
                class="logo"
                src="${Logo}"
                alt="Rick &amp; Morty Logo"
            /></a>
        </div>
        <nav class="nav header__nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a class="nav__link" href="#characters-section"
                        >Characters</a
                    >
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#episodes-section"
                        >Episodes</a
                    >
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#trailer-section">Trailer</a>
                </li>
            </ul>
        </nav>
        <div class="header__cta">
            <a href="#subscribe-form" class="main-cta">Subscribe</a>
        </div>
    </div>
    `;
    return view;
};

export default Header;