import talher from './talher.svg'
import { Link } from 'react-router-dom'

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={talher} alt="talher" className='img-nav' />
            <ul>
                <li>
                    <Link to="/" className='active'>Mais Pedidos</Link>
                </li>
                <li>
                    <Link to="/">Café da Manhã</Link>
                </li>
                <li>
                    <Link to="/About">Almoço</Link>
                </li>
                <li>
                    <Link to="/">Janta</Link>
                </li>
                <li>
                    <Link to="/">Bebidas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;