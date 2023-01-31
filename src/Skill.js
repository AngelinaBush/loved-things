import { useState } from "react";
import { dataTwo } from "./data";
import LeftArrow from './LeftArrow.png';
import RightArrow from './RightArrow.png';


function Skill() {
    
    const [skill, setSkill] = useState(0);
    const {id, description, image} = dataTwo[skill]

    const nextSkill = () => {
        setSkill((skill => {
            skill++;
            if (skill > dataTwo.length - 1) {
                skill = 0;
            }
            return skill;
        }))
    }

    const previousSkill = () => {
        setSkill((skill) => {
            skill--;
            if (skill < 0) {
                skill = dataTwo.length - 1;
            }
            return skill;
        })
    }

    return (
        <div class='component'>
            <div>
                <p>to learn...</p> 
            </div>
            <div>
                <div className="container">
                    <p>{id} - {description}</p>
                </div>
                <div className="container">
                    <img src={image} alt="skill" width="200px" height="250px" />
                </div>
            </div>
            <div>
            <div className="arrow-container">
                    <img src={LeftArrow} onClick={previousSkill} width="30px" alt="skill"/>
                    <img src={RightArrow} onClick={nextSkill} width="30px" alt="skill"/>
                </div>
            </div>
        </div>
    )
}

export default Skill;