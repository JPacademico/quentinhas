import prato from '../assets/comida01.jpg'
import ratatouille from '../assets/ratatule.jpg'
import brusquetta from '../assets/Brusquetta.jpg'
import canelone from '../assets/canelone.jpg'


const Home = () =>{
    return (
        <>
            <h2 className='categories-title'>Os Mais Pedidos!</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src={prato} alt="" className="comida"/>
                    <span>Paella valenciana</span>
                </li>
                <li className='dishes'>
                    <img src={ratatouille} alt="" className="comida"/>
                    <span>Ratatouille</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src={brusquetta} alt="" className="comida"/>
                    <span>Brusquetta</span>
                </li>
                <li className='dishes'>
                    <img src={canelone} alt="" className="comida"/>
                    <span>Canelone</span>
                </li>
            </ul>
        </>
    )
}

export default Home;