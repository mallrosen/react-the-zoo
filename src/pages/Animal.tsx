import { useParams } from "react-router-dom"
import { IAnimal } from "../models/IAnimal";
import { ShowAnimalDetails } from "../components/ShowAnimalDetail";
import { useState } from "react";


export const Animal = () => {

    const { paramsId } = useParams()

    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")
    console.log(animalsFromLs);

    const currentAnimal = animalsFromLs.find(animal => animal.id.toString() === paramsId);

    const [animalToFeed, setAnimalToFeed] = useState(currentAnimal)
    // const [animalListFromLs, setAnimalListFromLs] = useState<IAnimal[]>(animalsFromLs)

    const getTime = () =>{
        const time = new Date().toString()
        if(currentAnimal)
        setAnimalToFeed({...currentAnimal, lastFed: time})
        console.log(animalToFeed);

        
        
      }
          
 
    return (
        <>
            {currentAnimal && <ShowAnimalDetails getTime={getTime} animal={currentAnimal}/>}
        </>
    )
}