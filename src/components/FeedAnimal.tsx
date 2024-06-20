import { DateTime } from "luxon"
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IFeedAnimalProps {
    animal: IAnimal;
  }

export const FeedAnimal = ({animal}:IFeedAnimalProps) =>{

const { paramsId } = useParams()

const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")

const [animalToFeed, setAnimalToFeed] = useState<IAnimal>(animal)

const currentAnimal = animalsFromLs.find(animal => animal.id.toString() === paramsId);


const getTime = () => {

    
    const time = DateTime.now() 
    const feedTime = time.toISO()

    if(currentAnimal){
    setAnimalToFeed({...currentAnimal, isFed: true, lastFed: feedTime})
    saveAnimalList({...currentAnimal, isFed: true, lastFed: feedTime})
        

}}

const saveAnimalList = (animal:IAnimal) =>{
    const getAnimal = JSON.parse(localStorage.getItem("Animals") || "[]")

    const change = getAnimal.map((a: IAnimal)=>{
        if(a.id === animal.id){
            return {...animal} 
        } return a
    })

localStorage.setItem("Animals", JSON.stringify(change))
}


useEffect(()=>{

        if(currentAnimal){
        if(!currentAnimal.isFed)return
    
        const timeNow = DateTime.now()
        const feedingTime = DateTime.fromISO(currentAnimal.lastFed)
        
        const timeToFeed = feedingTime.plus({minutes: 1})


        if(timeNow > timeToFeed){
        
        const foodTimeList = animalsFromLs.map((a)=>{
            if(a.id === currentAnimal?.id){
                return {...a, isFed: false}
            } else { return a }
        })
        localStorage.setItem("Animals", JSON.stringify(foodTimeList))
        setAnimalToFeed({...currentAnimal, isFed: false})
    }}     

}, [animalsFromLs, currentAnimal])

const formatTime = DateTime.fromISO(animalToFeed.lastFed).toLocaleString(DateTime.DATETIME_MED)

return (
    <>
    <h3> {animalToFeed.name} matades senast: {formatTime}</h3>
    {!animalToFeed.isFed ? <button onClick={getTime} disabled={animalToFeed.isFed}>Mata</button> : <button onClick={getTime} disabled={animalToFeed.isFed}>Redan matad</button> }
    </>
)

}
