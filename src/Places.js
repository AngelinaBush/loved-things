import { useState } from "react";
import { dataOne } from "./data";
import LeftArrow from './LeftArrow.png';
import RightArrow from './RightArrow.png';

function Places() {

    const [place, setPlace] = useState(0);
    const {id, description, image} = dataOne[place];

    const nextPlace = () => {
        setPlace(place => {
            place++;
            if (place > dataOne.length - 1) {
                place = 0;
            }
            return place;
        })
    }

    const previousPlace = () => {
        setPlace(place => {
            place--;
            if (place < 0) {
                return dataOne.length - 1;
            }
            return place;
        })
    }


    return (
        <div class='component'>
            <div>
                <p>to visit...</p> 
            </div>
            <div>
                <div className="container">
                    <p>{id} - {description}</p>
                </div>
                <div className="container">
                    <img src={image} alt="place" width="200px" height="250px"/>
                </div>
            </div>
            <div>
                <div className="arrow-container">
                    <img src={LeftArrow} onClick={previousPlace} width="30px" alt="place"/>
                    <img src={RightArrow} onClick={nextPlace} width="30px" alt="place"/>
                </div>
            </div>
        </div>
    )

}

export default Places;