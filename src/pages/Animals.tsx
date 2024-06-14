import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from "axios"
import { ShowAnimals } from "../components/ShowAnimals"

export const Animals = () => {
    
    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")
    const [animalState, setAnimalState] = useState<IAnimal[]>(animalsFromLs)
    const [loading, setLoading] = useState(false)


    const getAnimals = async () => {
        const response = await axios.get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')
        localStorage.setItem("Animals", JSON.stringify(response.data))
        setAnimalState(response.data)
        console.log(response.data);
    }


useEffect(()=>{

    if (animalState.length > 0) return

    try{
        getAnimals()
    }
    catch{
        console.log('error');
        
    }
    finally{
        setLoading(true)
    }
}, [animalState, loading])



    return(
    <>
    <h1>Djuren</h1>
    <ShowAnimals animals={animalState} />
    </>
    )
}