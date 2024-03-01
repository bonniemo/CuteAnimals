

const AnimalInfo = ({ animal }) => {
    const { name, species, image_url, favourite_food, best_friend, favourite_spot } = animal;
    return (
        <>
            <article>
                <h1>{name}</h1>
                <section className="animal-facts">
                    <img src={image_url} alt="" />
                    <section>
                        <>
                            <p><span>Species:</span> {species}</p>
                            <p><span>Favourite Snack:</span> {favourite_food}</p>
                            <p><span>Bestie:</span> {best_friend}</p>
                            <p><span>Favourite Hangout:</span> {favourite_spot}</p>
                        </>

                    </section>
                </section>
            </article>
        </>
    )
}

export default AnimalInfo;