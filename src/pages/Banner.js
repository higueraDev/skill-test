import Spaceship from '../assets/spaceship.png'


const Banner = () => {
    const view = `
    <div class="banner__top">
        <div class="banner__icon">
            <img src="${Spaceship}" alt="Spaceship Icon" />
        </div>
        <div class="section__title">
            Your Journey It’s About To Begin
        </div>
        <div class="section__title">
            <span>Subscribe to our Newsletter</span>
            <span>to get the Latest Updates</span>
        </div>
    </div>
    <div class="banner__bottom">

        <div class="banner__cta">
            <a href="#subscribe-form" class="main-cta"
                >Subscribe Now</a
            >
        </div>
    </div>
    `;
    return view;
};

export default Banner;