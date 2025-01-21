import { useEffect, useState } from 'react'

import styles from './IndexPages.module.css'

import Select from '../pesquisaForm/Select'
import Button from '../pesquisaForm/Button'

function Carros(){

    const [options, setOptions] = useState([])
    const [marcaClicada, setMarcaClick] = useState(false)
    const [modelos, setModelos] = useState([])

    function marcaChecked(marcaClick){
        setMarcaClick(marcaClick)
    }

    useEffect(()=>{
        if(marcaClicada){
            fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaClicada}/modelos`)
            .then(resp=> resp.json()) 
            .then((data)=>{
                setModelos(data.modelos)
            })
            .catch((err)=>{
                console.log(err)
                setModelos([])
            })
        }
    },[marcaClicada])

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
                    <Select options={modelos} text="Modelos" disabled={marcaClicada ? false : true} />
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