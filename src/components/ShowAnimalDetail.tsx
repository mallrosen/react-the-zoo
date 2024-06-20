import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { FeedAnimal } from "./FeedAnimal";
import { imgError } from "../services/imgService";


interface IShowAnimalDetailsProps {
    animal: IAnimal;
  }


  
export const ShowAnimalDetails = ({ animal }: IShowAnimalDetailsProps) => {


  
  
    return (
      <>
      <h1></h1>
        <Link to={"/animals"}>Tillbaka</Link>
        <h3>{animal.name}</h3>
        <img src={animal.imageUrl} alt={animal.latinName} onError={imgError} />
        <p>{animal.longDescription}</p>
        <FeedAnimal animal={animal}/>
      </>
    );
  };