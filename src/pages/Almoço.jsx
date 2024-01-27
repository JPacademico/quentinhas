import prato from '../assets/comida01.jpg'
import lasanha from '../assets/lazanha.jpg'
import feijoada from '../assets/feijoada.jpg'
import moqueca from '../assets/moqueca.jpg'

const Almoço = () =>{
    return (
        <>
        <h2 className='categories-title'>Almoços</h2>
    
        <ul className='food-list'>
            <li className='dishes'>
                <img src={lasanha} alt="" className="comida"/>
                <span>Lasanha de beringela</span>
            </li>
            <li className='dishes'>
                <img src={feijoada} alt="" className="comida"/>
                <span>Feijoada</span>
            </li>
        </ul>

        <ul className='food-list'>
            <li className='dishes'>
                <img src={moqueca} alt="" className="comida"/>
                <span>Moqueca</span>
            </li>
            <li className='dishes'>
                <img src={prato} alt="" className="comida"/>
                <span>Paella valenciana</span>
            </li>
        </ul>
    </>
    )
}

export default Almoço;