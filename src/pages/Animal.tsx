import { useParams } from "react-router-dom"
import { IAnimal } from "../models/IAnimal";
import { ShowAnimalDetails } from "../components/ShowAnimalDetail";
import '../scss/_Animal.scss'


export const Animal = () => {
    const { paramsId } = useParams()
    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")
    const currentAnimal = animalsFromLs.find(animal => animal.id.toString() === paramsId);

    
 
    return (
        <>
            {currentAnimal && <ShowAnimalDetails animal={currentAnimal}/>}
        </>
    )
}