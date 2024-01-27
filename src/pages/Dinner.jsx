import pizza from '../assets/pizza.jpg'
import hamburgue from '../assets/hamburgue.jpg'
import poke from '../assets/poke.jpg'
import yakisoba from '../assets/yakisoba.jpeg'


const Dinner = () =>{
    return (
        <>
            <h2 className='categories-title'>Jantar</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src={pizza} alt="" className="comida"/>
                    <span>Pizza</span>
                </li>
                <li className='dishes'>
                    <img src={poke} alt="" className="comida"/>
                    <span>Poke</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src={hamburgue} alt="" className="comida"/>
                    <span>Hamburguer</span>
                </li>
                <li className='dishes'>
                    <img src={yakisoba} alt="" className="comida"/>
                    <span>Yakisoba</span>
                </li>
            </ul>
        </>
    )
}

export default Dinner;