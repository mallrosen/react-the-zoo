import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

export const getAnimals = async ():Promise <IAnimal[]> => {
    const response = await get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')

    return response
}
