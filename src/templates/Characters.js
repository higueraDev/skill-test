import getData from "../utils/getData";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const Characters = async () => {

        let id = [];
        for (let i=1; i<6;i++){
            id.push((getRandomInt(1, 671)));
        }
        const characters = await getData(id);

        const view = `
        <div class="container">
        <h2 class="section__title">
            Meet The Cast
            <span>
                Some of the Characters You'll <span>Find in Your Journey</span>
            </span>
        </h2>
        
        <div id="cards-container" class="cards-container">
        ${characters.map(character => `
                        <div class="card">
                        <div class="card__img"><img src="${character.image}" alt="${character.name}" /></div>
                        <div class="card__info">
                        <h3 class="card__detail card__name">${character.name}</h3>
                        <span class="card__detail card__status">Status: ${character.status}</span>
                        <span class="card__detail card__origin">Origin: ${character.origin.name}</span>
                        <span class="card__detail card__species">Species: ${character.species}</span>
                        </div>
                        </div>
                        `).join('')}
        </div>
        </div>
            `;
        return view;
};

export default Characters;
