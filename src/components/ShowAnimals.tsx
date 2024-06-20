import { IAnimal } from "../models/IAnimal"
import { ShowAnimal } from "./ShowAnimal"

interface IAnimalsProps{
    animals: IAnimal[]
}

export const ShowAnimals = ({animals}:IAnimalsProps) => {



    return (
    <>
    <h1 className="animalName">Djuren</h1>
    <div className="mainContainer">
    {animals.map((animal)=>{
        return <ShowAnimal key={animal.id} animal={animal}/>
    })}
    </div>
    </>
    )

}