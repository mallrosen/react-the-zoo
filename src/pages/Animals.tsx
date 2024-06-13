import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from "axios"
import { ShowAnimals } from "../components/ShowAnimals"

export const Animals = () => {
    
    const [animalState, setAnimalState] = useState<IAnimal[]>([])
    const [loading, setLoading] = useState(false)

    const getAnimals = async () => {
        const response = await axios.get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')
        setAnimalState(response.data)
        localStorage.setItem("Animals", JSON.stringify(response.data))
        console.log(response.data);

        
    }


useEffect(()=>{

    if (loading) return

    try{
        getAnimals()
    }
    catch{
        console.log('error');
        
    }
    finally{
        setLoading(true)
    }
}, [loading])



    return(
    <>
    <h1>Djuren</h1>
    <ShowAnimals animals={animalState} />
    </>
    )
}