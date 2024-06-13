import { useNavigate } from "react-router-dom"
import { IAnimal } from "../models/IAnimal"

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
        <div key={animal.id}>
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.shortDescription} />
            <p>{animal.shortDescription}</p>
            <button onClick={handleShowDetails}>Mer info + mata</button>
        </div>
    </>
)

}