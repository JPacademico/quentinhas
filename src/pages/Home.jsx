import prato from '../assets/comida01.jpg'


const Home = () =>{
    return (
        <>
        <div><h2>Os Mais Pedidos!</h2></div>
        
        <ul className='food-list'>
            <li className='dishes'>
                <img src={prato} alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src={prato} alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src={prato} alt="" className="comida"/>
                <span>comida</span>
            </li>
            <li className='dishes'>
                <img src={prato} alt="" className="comida"/>
                <span>comida</span>
            </li>
 
        </ul>
        </>
    )
}

export default Home;