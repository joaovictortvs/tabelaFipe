import { useState, useEffect } from 'react'

import Select from '../pesquisaForm/Select'
import Button from '../pesquisaForm/Button'

import styles from './IndexPages.module.css'

function Caminhoes(){
      const [options, setOptions] = useState([])
        const [marcaClicada, setMarcaClick] = useState(false)
    
        const [modelos, setModelos] = useState([])
        const [modeloClicado, setModeloClick] = useState(false)
    
        const [anos, setAnos] = useState([])
        const [anoClicado, setAnoClick] = useState(false)
    
        const [marcaVeiculo, setMarcaVeiculo] = useState(null)
        const [modeloVeiculo, setModeloVeiculo] = useState(null)
        const [valorCaminhao, setValorCaminhao] = useState(null)
        const [combustivel, setCombustivel] = useState(null)
        const [anoModelo, setAnoModelo] = useState(null)
        const [mesRef, setMesRef] = useState(null)
    
        const [caminhaoConsultado, setCaminhaoConsultado] = useState(false)
    
        function consultarCaminhao(){
            if(marcaClicada == false || modeloClicado == false || anoClicado == false){
                alert("É preciso todos os detalhes do veículo para consultar!")
            } else{
                fetch(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marcaClicada}/modelos/${modeloClicado}/anos/${anoClicado}`)
                .then(resp=> resp.json())
                .then((data)=>{
                    setMarcaVeiculo(data.Marca)
                    setModeloVeiculo(data.Modelo)
                    setValorCaminhao(data.Valor)
                    setAnoModelo(data.AnoModelo)
                    setCombustivel(data.Combustivel)
                    setMesRef(data.MesReferencia)
                    setCaminhaoConsultado(true)
                })
            }
        }
    
        function marcaChecked(marcaClick){
            setCaminhaoConsultado(false)
            setMarcaClick(marcaClick)
        }
    
        function modeloChecked(modeloClick){
            setCaminhaoConsultado(false)
            setModeloClick(modeloClick)
        }
    
        function anoChecked(anoClick){
            setCaminhaoConsultado(false)
            setAnoClick(anoClick)
        }
    
        useEffect(()=>{
            if(modeloClicado){
                fetch(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marcaClicada}/modelos/${modeloClicado}/anos`)
                .then(resp=> resp.json())
                .then((data)=>{
                    setAnos(data)
                })
                .catch(err=> console.log(err))
            }
        },[modeloClicado])
    
        useEffect(()=>{
            if(marcaClicada){
                fetch(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${marcaClicada}/modelos`)
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
            fetch('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas',{
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
            <div className={styles.selectContainer}>
                <Select options={options}  text="Marca" selecionado={marcaChecked}/>
                <Select options={modelos} text="Modelos" disabled={marcaClicada ? false : true} selecionado={modeloChecked}/>
            </div>
             
            <div className={styles.selectContainer}>
                <Select options={anos} text="Ano" disabled={modeloClicado ? false : true} selecionado={anoChecked}/>
            </div>
            {caminhaoConsultado && (
                <div> 
                    <p>Marca: {marcaVeiculo}</p>
                    <p>Modelo: {modeloVeiculo}</p>
                    <p>Valor: {valorCaminhao}</p>
                    <p>Ano-modelo: {anoModelo}</p>
                    <p>Tipo combustível: {combustivel}</p>
                    <p>Mês-referência: {mesRef}</p>
                </div>
            )}
            <Button text="Consultar Caminhao" consultar={consultarCaminhao}/>
        </div>
       
    </div>
    )

}

export default Caminhoes