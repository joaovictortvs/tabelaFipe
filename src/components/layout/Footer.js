import styles from './Footer.module.css'

import {FaGithub, FaInstagram} from 'react-icons/fa'

function Footer(){

    function linkar(link){

    }

    return(
        <div className={styles.footer}>
            <p>© Desenvolvido por <i>joaovictortvs dev</i></p>
            <div className={styles.social_medias}>
                <a href='https://github.com/joaovictortvs' target='_blank'><FaGithub/></a>
                <a href='https://www.instagram.com/joaoovv1/' target='_blank'><FaInstagram/></a>
            </div>
        </div>
    )

}

export default Footer