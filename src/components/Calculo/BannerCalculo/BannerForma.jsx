import './BannerForma.css'

import Figura from './Figura'
import Texto from './Texto'


export default function BannerForma(props) {
    return (
        <div className="bannerForma">
            <Figura imgForma={props.img} titulo={props.nome}></Figura>
            <Texto textoForma={props.texto}></Texto>
        </div>
    );

}