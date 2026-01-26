import './InfoCalculo.css';

export default function InfoCalculo(props){
    const linhas = props.infoTexto.split('\n');
    return (
        <div className="infoCalculo containers">
            {linhas.map((linha, index) => <p key={index} className="infoTexto">{linha}</p>)}
        </div>
    );
}