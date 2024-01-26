import prato from '../assets/comida01.jpg'

const About = () =>{
    return (
        <ul className='food-list'>
            <li className='dishes' >
                <img src={prato} alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src="" alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src="" alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src="" alt="" className="comida"/>
                <span>comida</span>
            </li>
        </ul>
    )
}

export default About;