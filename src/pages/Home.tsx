import bearImg from '../assets/bear.jpg'
import '../scss/_Home.scss'
export const Home = () => {


   return (
    <>
    <h1>Välkommen till Malins zoo</h1>
    <img className='bearImg' src={bearImg} alt="a bear" />
    </>
    )
}

