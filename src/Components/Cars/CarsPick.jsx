import { useState } from "react";
import Car from "./Car";


const CarsPick = ({ data }) => {
    const [choosenCar, setChoosenCar] = useState(null);
    const handleSelect = (e) => {
        const selected = e.target.value;
        const selectedCar = data.find(car => car.name === selected)
        setChoosenCar(selectedCar);
    }
    return (
        <>
            <section className="dropdown">
                <label htmlFor="cars-select">Choose a car:</label>
                <select name="cars" id="cars" onChange={handleSelect}>
                    <option value="cars">Cars:</option>
                    {data.map((car, index) => (
                        <option key={index} value={car.name}>{car.name}</option>
                    ))}
                </select>
            </section >
            {choosenCar &&
                <Car car={choosenCar} />
            }
        </>
    )
}

export default CarsPick;