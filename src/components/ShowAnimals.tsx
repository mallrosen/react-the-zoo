import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal"

interface IAnimalsProps{
    animals: IAnimal[]
}

export const ShowAnimals = ({animals}:IAnimalsProps) => {



    return (
    <>
    {animals.map((animal)=>{
        return <ShowAnimal key={animal.id} animal={animal}/>
    })}
    </>
    )

}