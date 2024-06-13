import { Link } from "react-router-dom";
import { IAnimalExt } from "../models/IAnimal";

interface IShowAnimalDetailsProps {
    animal: IAnimalExt;
  }
  
  export const ShowAnimalDetails = ({ animal }: IShowAnimalDetailsProps) => {
    return (
      <>
        <Link to={"/animals"}>Tillbaka</Link>
        <h3>{animal.name}</h3>
        <p>{animal.longDescription}</p>
        <img src={animal.imageUrl} alt={animal.latinName} />

      </>
    );
  };