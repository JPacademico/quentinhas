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
                <img src="https://i.imgur.com/S8sOVoE.jpeg" alt="" className="comida"/>
                <span>Lasanha de beringela</span>
            </li>
            <li className='dishes'>
                <img src="https://i.imgur.com/BLPb2oY.jpeg" alt="" className="comida"/>
                <span>Feijoada</span>
            </li>
        </ul>

        <ul className='food-list'>
            <li className='dishes'>
                <img src="https://i.imgur.com/2d5ugbA.jpeg" alt="" className="comida"/>
                <span>Moqueca</span>
            </li>
            <li className='dishes'>
                <img src="https://i.imgur.com/IcDOT7c.jpeg" alt="" className="comida"/>
                <span>Paella Valenciana</span>
            </li>
        </ul>
    </>
    )
}

export default Almoço;