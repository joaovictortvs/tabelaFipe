import { useEffect, useState } from 'react'

import styles from './IndexPages.module.css'

import Select from '../pesquisaForm/Select'
import Button from '../pesquisaForm/Button'

function Carros(){

    const [options, setOptions] = useState([])
    const [marcaClicada, setMarcaClick] = useState(false)

    const [modelos, setModelos] = useState([])
    const [modeloClicado, setModeloClick] = useState(false)

    const [anos, setAnos] = useState([])
    const [anoClicado, setAnoClick] = useState(false)

    const [marcaVeiculo, setMarcaVeiculo] = useState(null)
    const [modeloVeiculo, setModeloVeiculo] = useState(null)
    const [valorCarro, setValorCarro] = useState(null)
    const [combustivel, setCombustivel] = useState(null)
    const [anoModelo, setAnoModelo] = useState(null)
    const [mesRef, setMesRef] = useState(null)

    const [carroConsultado, setCarroConsultado] = useState(false)

    function consultarCarro(){
        if(marcaClicada == false || modeloClicado == false || anoClicado == false){
            alert("É preciso todos os detalhes do veículo para consultar!")
        } else{
            fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaClicada}/modelos/${modeloClicado}/anos/${anoClicado}`)
            .then(resp=> resp.json())
            .then((data)=>{
                setMarcaVeiculo(data.Marca)
                setModeloVeiculo(data.Modelo)
                setValorCarro(data.Valor)
                setAnoModelo(data.AnoModelo)
                setCombustivel(data.Combustivel)
                setMesRef(data.MesReferencia)
                setCarroConsultado(true)
            })
        }
    }

    function marcaChecked(marcaClick){
        setCarroConsultado(false)
        setMarcaClick(marcaClick)
    }

    function modeloChecked(modeloClick){
        setCarroConsultado(false)
        setModeloClick(modeloClick)
    }

    function anoChecked(anoClick){
        setCarroConsultado(false)
        setAnoClick(anoClick)
    }

    useEffect(()=>{
        if(modeloClicado){
            fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaClicada}/modelos/${modeloClicado}/anos`)
            .then(resp=> resp.json())
            .then((data)=>{
                setAnos(data)
            })
            .catch(err=> console.log(err))
        }
    },[modeloClicado])

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
        .catch(err=> console.log(err))
    }, [])


    return(
         <div className={styles.busca}>
            <div className={styles.containerBusca}>
                <h1>Qual <strong>Carro</strong> você está interessado em comprar ou vender?</h1>
                <div className={styles.selectContainer}>
                    <Select options={options}  text="Marca" selecionado={marcaChecked}/>
                    <Select options={modelos} text="Modelos" disabled={marcaClicada ? false : true} selecionado={modeloChecked}/>
                    <Select options={anos} text="Ano" disabled={modeloClicado ? false : true} selecionado={anoChecked}/>
                </div>
                {carroConsultado && (
                    <div className={styles.veiculoDados}>
                        <div className={styles.dados}> 
                            <p>Marca: <br/>{marcaVeiculo}</p>
                            <p>Modelo: <br/>{modeloVeiculo}</p>
                        </div>
                        <div className={styles.dados}>
                            <p className={styles.valor}>Valor: <br/>{valorCarro}</p>
                            <p>Ano-modelo: <br/> {anoModelo}</p>
                        </div>
                        <div className={styles.dados}>
                            <p>Tipo combustível: <br/> {combustivel}</p>
                            <p>Mês-referência: <br/>{mesRef}</p>
                        </div>
                    </div>
                )}
                <Button text="Consultar Carro" consultar={consultarCarro}/>
            </div>
           
        </div>
    )

}

export default Carros