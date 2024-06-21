import { SyntheticEvent } from "react";
import placeholder from "../assets/bild-saknas.png";

export const useImgError =(e: SyntheticEvent<HTMLImageElement>)=>{
(e.target as HTMLImageElement).src = placeholder
}