import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
interface IShowAnimalDetailsProps {
    animal: IAnimal;
    getTime: ()=> void;
  }
  
  export const ShowAnimalDetails = ({ animal, getTime }: IShowAnimalDetailsProps) => {

  
  
  
    return (
      <>
      <h1></h1>
        <Link to={"/animals"}>Tillbaka</Link>
        <h3>{animal.name}</h3>
        <p>{animal.longDescription}</p>
        <img src={animal.imageUrl} alt={animal.latinName} />
        <button onClick={getTime}>Mata</button>
      </>
    );
  };