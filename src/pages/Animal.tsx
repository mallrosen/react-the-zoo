import { useEffect, useState } from "react"
import { ShowAnimalDetails } from "../components/ShowAnimalDetail"
import { IAnimalExt } from "../models/IAnimal"
import { useParams } from "react-router-dom"
import axios from "axios"

export const Animal = () => {

    const { id } = useParams()
    const [detailAnimal, setDetailAnimal] = useState<IAnimalExt>()
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
    if(loading) return
    const getAnimalDetails = async () => {
        const response = await axios.get<IAnimalExt>('https://animals.azurewebsites.net/api/animals/' + id)
        setDetailAnimal(response.data)
        setLoading(true)
        console.log(response.data);
    }
    getAnimalDetails()

})

    return (
    <>
   {detailAnimal && loading && <ShowAnimalDetails animal={detailAnimal}/>}
    </>
    )

}