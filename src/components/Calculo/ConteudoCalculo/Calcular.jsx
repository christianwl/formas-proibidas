import React, { useState } from 'react';

import './Calcular.css';

export default function Calcular({ props }) {
    const [valores, setValores] = useState({});
    const [poligonoN, setPoligonoN] = useState();

    const calcularArea = () => {
        let area;
        switch (props.id) {
            case 'circulo':
                area = (Math.PI * valores.raio ** 2);
                break;
            case 'cubo':
                area = 6 * (valores.lado ** 2);
                break;
            case 'retangulo':
                area = valores.comprimento * valores.largura;
                break;
            case 'romboedro':
                area = 3 * ((valores.diagonalA * valores.diagonalB) / 2);
                break;
            case 'trapezio':
                area = ((valores.base1 + valores.base2) * valores.altura) / 2;
                break;
            case 'poligono':
                area = poligonoN * (valores.comprimento ** 2) / (4 * Math.tan(Math.PI / poligonoN));
                break;
            case 'quadrado':
                area = 3 * valores.lado * valores.lado;
                break;
            case 'cuboide':
                area = 3 * (valores.comprimento * valores.largura + valores.comprimento * valores.altura + valores.largura * valores.altura);
                break;
            default:
                area = 0;
        }
        return isNaN(area) ? 'Nenhum Resultado' : area.toFixed(2);
    };

    const renderInputs = () => {
        const inputs = props.label.map((campo, index) => (
            <input key={index} className='inputs'
                type='number'
                placeholder={`Insira o valor de ${campo}`}
                onChange={valor => setValores(prevState => ({ ...prevState, [campo]: parseFloat(valor.target.value) }))}
            />
        ));

        return inputs;
    };

    const renderOptions = () => {
        if (props.id === 'poligono') {
            const options = props.tipo.map((nLado, i) => {
                return <option key={i} value={i + 5}>{nLado}</option>
            })

            return (<select className='options' size={4} onChange={(event) => setPoligonoN(event.target.value)}>
                <optgroup label="Escolha o tipo de Poligono">
                    {options}
                </optgroup >
            </select >);
        }
        return;
    }

    return (
        <div className='calcular containers'>
            <div>
                <h3>Insira as informações a seguir</h3>
                {renderOptions()}
                {renderInputs()}
            </div>
            <p>Área: {calcularArea()}</p>
        </div>
    );
}

