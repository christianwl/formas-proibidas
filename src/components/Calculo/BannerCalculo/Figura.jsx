import '../../../assets/css/figura.css'

export default function Figura(props){
    return (
        <div className="figura">
            <img className="img__Forma" src={props.imgForma}></img>
            <h1 className="titulo__forma">{props.titulo}</h1>
        </div>
    );
}