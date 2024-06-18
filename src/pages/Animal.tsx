import { useParams } from "react-router-dom"
import { IAnimal } from "../models/IAnimal";
import { ShowAnimalDetails } from "../components/ShowAnimalDetail";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";


export const Animal = () => {
    const { paramsId } = useParams()


    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")


    const currentAnimal = animalsFromLs.find(animal => animal.id.toString() === paramsId);


    const [animalsStateFromLs, setAnimalsStateFromLs] = useState<IAnimal[]>(animalsFromLs)
    // const [animalToFeed, setAnimalToFeed] = useState<IAnimal>()


    useEffect(()=>{



        if(currentAnimal){
        const timeNow = DateTime.now()
        const feedingTime = DateTime.fromISO(currentAnimal.lastFed)
        
        const timeToFeed = feedingTime.plus({minutes: 1})


        if(timeNow > timeToFeed){
        
        const foodTimeList = animalsStateFromLs.map((a)=>{
            if(a.id === currentAnimal?.id){
                return {...a, isFed: false}
            } else { return a }
        })
        localStorage.setItem("Animals", JSON.stringify(foodTimeList))
        setAnimalsStateFromLs(foodTimeList)
    }}     
}, [animalsStateFromLs, currentAnimal])
        

const getTime = () =>{

        const time = DateTime.now() 
        const feedTime = time.toISO()
        // const formatTime = time.toFormat("yyyy-MM-dd HH:mm")


        const change = animalsStateFromLs.map((a)=>{
        if(a.id === currentAnimal?.id){
            return {...a, lastFed: feedTime, isFed: true} 
        } else { return a}

})

localStorage.setItem("Animals", JSON.stringify(change))
setAnimalsStateFromLs(change)
console.log(animalsStateFromLs);
}


 
    return (
        <>
            {currentAnimal && <ShowAnimalDetails getTime={getTime} animal={currentAnimal}/>}
        </>
    )
}