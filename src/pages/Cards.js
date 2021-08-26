import getData from "../utils/getData";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const Cards = async () => {

        let id = [];
        for (let i=1; i<6;i++){
            id.push((getRandomInt(1, 671)));
            console.log(id);
        }
        const characters = await getData(id);

        const view = `
                ${characters.map(character => `
                <div class="card">
                <div class="card__img"><img src="${character.image}" alt="${character.name}" /></div>
                <div class="card__info">
                <span class="card__detail card__name">${character.name}</span>
                <span class="card__detail card__status">${character.status}</span>
                <span class="card__detail card__origin">${character.origin.name}</span>
                <span class="card__detail card__species">${character.species}</span>
                </div>
                </div>
                `).join('')}
            `;
        return view;
};

export default Cards;
