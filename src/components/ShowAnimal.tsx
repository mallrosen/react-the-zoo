import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"
import { imgError } from "../services/imgService"


interface IShowAnimals {
    animal: IAnimal
}


export const ShowAnimal = ({animal}:IShowAnimals) => {
    const navigate = useNavigate()


const handleShowDetails = () =>{
    navigate("/animals/" + animal.id)
}



    return (
    <>    
        <div className="animalContainer">
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.shortDescription} onClick={handleShowDetails} onError={imgError}/>
            <p className="animalText">{animal.shortDescription}</p>
        </div>
    </>
)

}