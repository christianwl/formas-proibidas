import '../../../assets/css/areaDeCalculo.css'

import InfoCalculo from './InfoCalculo'
import Calcular from './Calcular';

export default function AreaDeCalculo(props) {
    return (
        <div className="areaDeCalculo">
            
            <h2 className='subtitulo'>Calculadora da área do {props.subtitulo}</h2>
            <div className='informacoes'>
                <InfoCalculo infoTexto={props.infoCalc}></InfoCalculo>
                <Calcular props={props.objeto} />
            </div>
        </div>
    );
}