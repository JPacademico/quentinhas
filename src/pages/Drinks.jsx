import chocolate from '../assets/chocolate.jpg'
import uva from '../assets/uva.jpg'
import abacaxi from '../assets/abacaxi.png'
import vinho from '../assets/vinho.jpg'


const Drinks = () =>{
    return (
        <>
            <h2 className='categories-title'>Bebidas</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src={uva} alt="" className="comida"/>
                    <span>Uva</span>
                </li>
                <li className='dishes'>
                    <img src={chocolate} alt="" className="comida"/>
                    <span>Chocolate quente</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src={abacaxi} alt="" className="comida"/>
                    <span>Abacaxi com hortelã</span>
                </li>
                <li className='dishes'>
                    <img src={vinho} alt="" className="comida"/>
                    <span>Vinho</span>
                </li>
            </ul>
        </>
    )
}

export default Drinks;