import { useState } from "react";
import { dataThree } from "./data";
import LeftArrow from './LeftArrow.png';
import RightArrow from './RightArrow.png';

function Foods() {
    
    const [food, setFood] = useState(0);
    const {id, description, image} = dataThree[food]

    const nextFood = () => {
        setFood((food => {
            food++;
            if (food > dataThree.length - 1) {
                food = 0;
            }
            return food;
        }))
    }

    const previousFood = () => {
        setFood((food) => {
            food--;
            if (food < 0) {
                food = dataThree.length - 1;
            }
            return food;
        })
    }

    return (
        <div class='component'>
            <div>
                <p>to taste...</p> 
            </div>
            <div>
                <div className="container">
                    <p>{id} - {description}</p>
                </div>
                <div className="container">
                    <img src={image} alt="food" width="200px" height="250px" />
                </div>
            </div>
            <div>
            <div className="arrow-container">
                    <img src={LeftArrow} onClick={previousFood} width="30px" alt="food"/>
                    <img src={RightArrow} onClick={nextFood} width="30px" alt="food"/>
                </div>
            </div>
        </div>
    )
}

export default Foods;