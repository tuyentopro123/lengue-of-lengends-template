import './Button.scss'

const Button = (props) => {
    return (
        <button 
            className= {`btn ${props.className ? props.className : ''}`}
            onClick = {props.onClick ? props.onClick : null}
        >
            {props.children}
        </button>
    )
}

export default Button
