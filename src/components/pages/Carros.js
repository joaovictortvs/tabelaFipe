import { useEffect, useState } from 'react'

import styles from './IndexPages.module.css'

import Select from '../pesquisaForm/Select'
import Button from '../pesquisaForm/Button'

function Carros(){

    const [options, setOptions] = useState([])
    const [marca, setMarca] = useState(false)

    function marcaChecked(){
        setMarca(true)
    }

    useEffect(()=>{
        fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas',{
            headers:{
                'Content-Type': "application/json"
            }
        })
        .then(resp=>resp.json())
        .then((data)=>{
            setOptions(data)
        })
    }, [])

    return(
         <div className={styles.busca}>
            <div className={styles.containerBusca}>
                <div className={styles.selectContainer}>
                    <Select options={options}  text="Marcas" marcaSelecionada={marcaChecked}/>
                    <Select options={options} text="Modelos" disabled={marca ? false : true}/>
                </div>
                 
                <div className={styles.selectContainer}>
                    <Select options={options} text="Marcas"/>
                    <Select options={options} text="Modelos"/>
                </div>
                <Button text="Consultar Carro"/>
            </div>
           
        </div>
    )

}

export default Carros