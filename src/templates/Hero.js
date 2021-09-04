import Illustration from '../assets/images/Illustration.png'

const Hero = (formStatus, welcomeStatus ,USER_NAME) => {
    
    let view = 
    `
    <div class="container">
        <div class="hero__left">
            <h1>
                Back to the Future <span>meets Doctor Who</span> Rated-R Edition
            </h1>
            <p>
                Rick and Morty is an American adult animated science
                fiction sitcom created by Justin Roiland and Dan
                Harmon for Cartoon Network's nighttime programming
                block, Adult Swim.
            </p>
            <form action="" id="subscribe-form" class="${formStatus}">
                <label for="name">Subscribe to our Newsletter</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                />
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    />
                    <button class="main-cta" id="button">
                    Subscribe Now
                    </button>
            </form>
                
            <div class="hero-welcome ${welcomeStatus}" id="user">
                Welcome back ${USER_NAME}
                <span>Here it is what you might have missed</span>
            </div>

            <a href="#characters-section"  class="hero__bottom">
                <small>Not convince yet? Scroll for more!</small>
            </a>
        </div>
        <div class="hero__right">
            <img
                src="${Illustration}"
                alt="Back to the Future meets Doctor Who Rated-R Edition"
            />
        </div>

    </div>


    `;

    return view;
};

export default Hero;