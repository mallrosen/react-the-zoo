import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"

import { ShowAnimals } from "../components/ShowAnimals"
import { getAnimals } from "../services/animalsService"

export const Animals = () => {
    
    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")
    const [animalState, setAnimalState] = useState<IAnimal[]>(animalsFromLs)


const getData = async () =>{
    const theZoo = await getAnimals()
    localStorage.setItem("Animals", JSON.stringify(theZoo))
    setAnimalState(theZoo)
}



useEffect(()=>{

    if (animalState.length > 0) return

    try{
        getData()
    }
    catch{
        console.log('error');
        }
}, [animalState])



    return(
    <>
    <h1>Djuren</h1>
    <ShowAnimals animals={animalState} />
    </>
    )
}