type buttonProps = {
    children:any;
    onClick?: () => void;
}


const ControlButton = ({children,onClick}:buttonProps) =>{
    return(
        <button onClick={onClick} className="control-button">
            {children}
        </button>
    )
}
export default ControlButton;