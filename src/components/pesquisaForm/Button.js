import styles from './Button.module.css'

function Button({text, consultar}){

    return(
        <div>
            <button onClick={consultar}>{text}</button>
        </div>
    )

}

export default Button