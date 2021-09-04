import Collage from '../assets/images/collage2x.png'


const Episodes = () => {
    const view = `
    <div class="container-xl">
    <h2 class="section__title">
        
            A Never Ending Story
            <span> Most Viewed Episodes </span>
    </h2>
    <div>
        <img src="${Collage}" alt="Collage"/>
    </div>
    <div class="episodes-container">
        <div class="episode">
            <h3 class="episode__title">Pickle Rick</h3>
            <p class="episode__detail">
                Some men will literally turn themselves into a
                pickle to avoid going to therapy.
            </p>
        </div>
        <div class="episode">
            <h3 class="episode__title">The Ricklantis Mixup</h3>
            <p class="episode__detail">
                First presents itself as an Atlantis adventure,
                then quickly becomes something all together
                weirder.
            </p>
        </div>
        <div class="episode">
            <h3 class="episode__title">Meeseeks and Destroy</h3>
            <p class="episode__detail">
                Just five short adventures into its very being,
                it has moments of unbearable darkness.
            </p>
        </div>
        <div class="episode">
            <h3 class="episode__title">Ricksy Business</h3>
            <p class="episode__detail">
                Here we meet Squanchy, Bird Person, Abrodolph
                Lincoler and Revolio Clockberg, Jr.
            </p>
        </div>
        <div class="episode">
            <h3 class="episode__title">Rixty Minutes</h3>
            <p class="episode__detail">
                The episode introduces the concept of
                “interdimensional cable”.
            </p>
        </div>
    </div>
    </div>
    `;
    return view;
};

export default Episodes;