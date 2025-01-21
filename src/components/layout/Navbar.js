import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(){

    return(
        <div className={styles.navbar}>
            <h1>Tabela FIPE</h1>
            <ul className={styles.list_nav}>
                <li>
                    <Link to="/">Carros</Link>
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