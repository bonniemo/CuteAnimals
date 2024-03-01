
const Car = ({ car }) => {
    const { name, type, img, favourite_road, favourite_drink, country_song, hates } = car;
    return (
        <>
            <article>
                <h1>{name}</h1>
                <section className="facts">
                    <img src={img} alt="" />
                    <section>
                        <p>Type: {type}</p>
                        <p>Fav road: {favourite_road}</p>
                        <p>Drinks: {favourite_drink}</p>
                        <p>Blasting: {country_song}</p>
                        <p>Hates: {hates}</p>
                    </section>

                </section>

            </article>
        </>
    )
}

export default Car; 