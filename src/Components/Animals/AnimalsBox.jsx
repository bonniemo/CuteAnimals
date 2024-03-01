import AnimalsChoose from "./AnimalsChoose";
import dataJson from './Animals.json'
import './Animals.css';


const AnimalsBox = () => {
    const data = dataJson.data;
    return (
        <>
            <article className="card">
                <AnimalsChoose animals={data} />
            </article>
        </>
    )
}

export default AnimalsBox;