import { SlMagnifier } from "react-icons/sl";

import styles from './Busca.module.css'

function Busca(){

    async function BuscarCodigoFipe(codigo){
        
        //https://deividfortuna.github.io/fipe/
    }

    return(
        <div className={styles.busca}>
            <div className={styles.containerBusca}>
                <div className={styles.pesquisaFipe}>
                    <SlMagnifier className={styles.lupa}/>
                    <input type="number" name="pesquisaCodigo" placeholder="Busque pelo código FIPE do veículo" onKeyDown={(evt)=>{ if(evt.key === "Enter"){BuscarCodigoFipe(evt.target.value)}}}/>
                </div>
                <p className={styles.textExp}>*o código Fipe considera o ano e o mês de fabricação, além de outros fatores como modelo, versão e combustível, para identificar o veículo.</p>
            </div>
         
        </div>
    )

}

export default Busca