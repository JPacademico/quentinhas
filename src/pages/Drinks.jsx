

const Drinks = () =>{
    return (
        <>
            <h2 className='categories-title'>Bebidas</h2>
        
            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/Tj4x9vN.jpeg" alt="" className="comida"/>
                    <span>Uva</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/1yChRLp.jpeg" alt="" className="comida"/>
                    <span>Chocolate quente</span>
                </li>
            </ul>

            <ul className='food-list'>
                <li className='dishes'>
                    <img src="https://i.imgur.com/dvt1B2P.png" alt="" className="comida"/>
                    <span>Abacaxi com hortelã</span>
                </li>
                <li className='dishes'>
                    <img src="https://i.imgur.com/fazCdsg.jpeg" alt="" className="comida"/>
                    <span>Vinho</span>
                </li>
            </ul>
        </>
    )
}

export default Drinks;