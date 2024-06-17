import { useParams } from "react-router-dom"
import { IAnimal } from "../models/IAnimal";
import { ShowAnimalDetails } from "../components/ShowAnimalDetail";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";


export const Animal = () => {
    const { paramsId } = useParams()


    const animalsFromLs: IAnimal[] = JSON.parse(localStorage.getItem("Animals") || "[]")


    const currentAnimal = animalsFromLs.find(animal => animal.id.toString() === paramsId);

    // const [animalToFeed, setAnimalToFeed] = useState(currentAnimal)

    const [animalsStateFromLs, setAnimalsStateFromLs] = useState<IAnimal[]>(animalsFromLs)



const getTime = () =>{

        const time = DateTime.now() 
        const formatTime = time.toFormat("yyyy-MM-dd HH:mm")


        const change = animalsFromLs.map((a)=>{
        if(a.id === currentAnimal?.id){
            return {...a, lastFed: formatTime, isFed: true} 
        } else { return a}

})

localStorage.setItem("Animals", JSON.stringify(change))
setAnimalsStateFromLs(change)
console.log(animalsStateFromLs);
}


useEffect(()=>{
    // const timeNow = new Date()
    // const timeNowMinutes = timeNow.getHours() * 60 + timeNow.getMinutes()
    // console.log(timeNowMinutes);
    
    // const feedTime = currentAnimal?.lastFed

    // if(feedTime){
    // const [hours, minutes] = feedTime.split(':').map(Number);
    // const feedTimeMinutes = hours * 60 + minutes;


    // console.log(feedTimeMinutes);

    // if(feedTimeMinutes + 240 > timeNowMinutes)
    //     console.log("Du lyckas");
        

    // }



    const timeNow = DateTime.now().toISODate()
    // .toLocaleString(DateTime.DATETIME_SHORT);
    console.log(timeNow);
    

    if(currentAnimal){
    const timeFed = DateTime.fromISO(currentAnimal?.lastFed)
    // .toLocaleString(DateTime.DATETIME_SHORT);
    // console.log(timeFed);

    // const DiffTime = DateTime.fromISO(timeNow).diff(DateTime.fromISO(timeFed), 'hours')

    const timeDiff = timeNow.diff(timeFed, 'hours')

    timeDiff.toObject()

    console.log(timeDiff.hours)





    // console.log(DiffTime.hours);


    
    
    }


})

 
    return (
        <>
            {currentAnimal && <ShowAnimalDetails getTime={getTime} animal={currentAnimal}/>}
        </>
    )
}