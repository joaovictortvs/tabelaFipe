import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(){

    return(
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/">Busca</Link>
                </li>
                <li>
                    <Link to="/carros">Carros</Link>
                </li>
                <li>
                    <Link to="/motos">Motos</Link>
                </li>
                <li>
                    <Link to="/caminhoes">Caminhões</Link>
                </li>
            </ul>
        </div>
    )

}

export default Navbar