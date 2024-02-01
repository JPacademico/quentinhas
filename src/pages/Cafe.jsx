import panqueca from '../assets/panqueca.jpg'
import foccaccia from '../assets/foccaccia.jpg'
import brusquetta from '../assets/Brusquetta.jpg'
import tofu from '../assets/tofu.jpg'


const Cafe = () =>{
    return (
        <>
            <h2 className='categories-title'>Café da manhã</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/g6OxhSr.jpeg" alt="" className="comida"/>
                    <span>Panqueca</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/0tXLgZz.jpeg" alt="" className="comida"/>
                    <span>Foccaccia</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/pQfvIpR.jpeg" alt="" className="comida"/>
                    <span>Brusquetta</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/e76Kxam.jpeg" alt="" className="comida"/>
                    <span>Tofu</span>
                </li>
            </ul>
        </>
    )
}

export default Cafe;