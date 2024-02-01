


const Dinner = () =>{
    return (
        <>
            <h2 className='categories-title'>Jantar</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/BEIum8K.jpeg" alt="" className="comida"/>
                    <span>Pizza</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/KG8Eahi.jpeg" alt="" className="comida"/>
                    <span>Poke</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/MeiXWBW.jpeg" alt="" className="comida"/>
                    <span>Hamburguer</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/QI5zSuj.jpeg" alt="" className="comida"/>
                    <span>Yakisoba</span>
                </li>
            </ul>
        </>
    )
}

export default Dinner;