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
                    <img src="https://i.imgur.com/IcDOT7c.jpeg" alt="" className="comida"/>
                    <span>Paella valenciana</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/WW5kAsf.jpeg" alt="" className="comida"/>
                    <span>Ratatouille</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/pQfvIpR.jpeg" alt="" className="comida"/>
                    <span>Brusquetta</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/Hwp8YtA.jpeg" alt="" className="comida"/>
                    <span>Canelone</span>
                </li>
            </ul>
        </>
    )
}

export default Home;