import Illustration from '../assets/Illustration.png'
import getUser from '../utils/getUser';

const Hero = () => {

    const form = 
    `
    <form action="" id="subscribe-form" >
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
            
            `;
            const submit =  
            `
            <button class="main-cta" type="submit" onClick="getUser(form)">
            Subscribe Now
            </button>
    </form>
            
        

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

    </div>`;
    
    const view = `
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
        
        ${form}
        ${submit}

    `;

    return view;

};

export default Hero;