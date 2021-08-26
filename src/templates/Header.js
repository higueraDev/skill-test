const Header = () => {
    const view = `
    <header class="header">
    <div class="header__logo">
        <img
            class="logo"
            src="assets/title.png"
            alt="Rick &amp; Morty Logo"
        />
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
        <a href="#subscribe-form" class="main-cta">Subscribe Now</a>
    </div>
    </header>
    `;
    return view;
};

export default Header;