import styles from './Select.module.css'

function Select({options, text, marcaSelecionada, disabled}){

    return(
        <>
            <label htmlFor={text}>{text}</label>
            <select id={text} key={text} disabled={disabled} onChange={marcaSelecionada}>
            <option value="">Escolha uma opção</option>
            {options.map((option)=>(
                <option key={option.codigo} value={option.codigo}>{option.nome}</option>
            ))}
            </select>
        </>
    )

}

export default Select