import '../../../assets/css/texto.css'

export default function Texto(props){
    const linhas = props.textoForma.split('\n');
    return (
        <div className="textoForma">
            {linhas.map((linha, index) => <p key={index}>{linha}</p>)}
        </div>
    );
}