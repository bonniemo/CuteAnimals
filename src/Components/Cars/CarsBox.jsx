import dataJson from './Cars.json'
import CarsPick from './CarsPick';

const CarsBox = () => {
    const data = dataJson.data;
    return (
        <>
            <article className="card">
                <CarsPick data={data} />
            </article>
        </>
    )
}

export default CarsBox;