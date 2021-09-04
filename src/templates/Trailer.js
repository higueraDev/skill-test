

const Trailer = () => {
    const view = `
    <div class="container">
    <div class="section__title">
        A Peek to the Madness
        <span>Watch the Newest Trailer</span>
    </div>
    <div class="trailer-info">
        <p>
            The show revolves around the adventures of the
            members of the Smith household, which consists of
            parents Jerry and Beth, their children Summer and
            Morty, and Beth's father, Rick Sanchez, who lives
            with them as a guest.
        </p>
    </div>
    <div class="trailer">
    <div class="aspect-ratio-wrap">
    <iframe
        src="https://www.youtube.com/embed/AvgqcKOXSUE"
        title="YouTube Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>

    </div>
    
    </div>
    </div>
    `;
    return view;
};

export default Trailer;