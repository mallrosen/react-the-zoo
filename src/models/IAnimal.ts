export interface IAnimal {
    id: number,
    name: string,
    shortDescription: string,
    imageUrl: string,
    isFed: boolean,
    lastFed: string,
    latinName: string,
    yearOfBirth: number,
    longDescription: string,
    medicine: string,
}

export interface IAnimalExt extends IAnimal {
    needFood: boolean,
}