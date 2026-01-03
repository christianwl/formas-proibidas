import { Link } from 'react-router-dom';

import '../../../assets/css/formas.css';

export default function Formas(props) {
    return (
        <Link className='formas' to={props.site}>
            <div className='imagem'>
                <img src={props.img} />
            </div>            
            <div className='info'>
                <p className='titulo'>{props.titulo}</p>
                <p className='texto'>{props.texto}</p>
            </div>
        </Link>
    );
}