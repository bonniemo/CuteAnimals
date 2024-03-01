import { useState } from "react";
import AnimalInfo from "./AnimalInfo";


const AnimalsChoose = ({ animals }) => {
    const [ChosenAnimal, setChosenAnimal] = useState(null);
    const handleSelect = (e) => {
        const selected = e.target.value;
        const selectedAnimal = animals.find(animal => animal.name === selected)
        setChosenAnimal(selectedAnimal)
    }

    return (
        <>
            <section className="dropdown">
                <label htmlFor="animal-choose">Choose a cute animal</label>
                <select name="animals" id="animal-choose" onChange={handleSelect}>
                    <option value="">Animals:</option>
                    {animals.map((animal, index) => (
                        <option value={animal.name} key={index}>
                            {animal.name}
                        </option>
                    ))}
                </select>
            </section>
            {ChosenAnimal &&
                <AnimalInfo animal={ChosenAnimal} />
            }
        </>
    )
}

export default AnimalsChoose;