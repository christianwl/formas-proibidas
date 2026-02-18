import Formas from './Formas';

import circle from '@/assets/img/formas/circle.png';
import cube from '@/assets/img/formas/cube.svg';
import rectangle from '@/assets/img/formas/rectangle.svg';
import rhombohedron from '@/assets/img/formas/rhombohedron.svg';
import trapeze from '@/assets/img/formas/trapeze.svg';
import polygon from '@/assets/img/formas/polygon.svg';
import square from '@/assets/img/formas/square.svg';
import cuboid from '@/assets/img/formas/cuboid.svg';

import './ConjuntoDeFormas.css';


//usar um array.map para colocar todas as informações de uma única vez.
export default function ConjuntoDeFormas() {
    return (
        <div className='conjuntoDeFormas'>
            <Formas site={'/pagina-calculo/circulo'} img={circle} titulo={'Explorando o Mágico Círculo!'} texto={
                'Bem-vindos à página do Círculo, onde a geometria se torna uma dança circular. Imagine-se girando em torno do centro, como um bailarino em um salão matemático'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/cubo'} img={cube} titulo={'Explorando o Enigmático Cubo!'} texto={
                'Bem-vindos à página do Cubo, onde a matemática ganha vida tridimensional. Preparem-se para mergulhar nas profundezas do espaço cúbico!'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/retangulo'} img={rectangle} titulo={'Desvendando o Retângulo!'} texto={
                'Bem-vindos à página do Retângulo, onde a matemática se desdobra em quatro lados retos e paralelos. Imagine-se medindo os ângulos, traçando linhas e descobrindo a área desse polígono.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/romboedro'} img={rhombohedron} titulo={'Explorando o Fascinante Romboedro!'} texto={
                'Bem-vindos à página do Romboedro, onde a geometria se entrelaça em seis faces de losango. Imagine-se segurando cada vértice, girando-o no espaço e desvendando suas propriedades únicas.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/trapezio'} img={trapeze} titulo={'Explorando o Desafiador Trapézio Irregular!'} texto={
                'Bem-vindos à página do Trapézio Irregular, onde a matemática se entrelaça em quatro lados que não seguem as regras tradicionais. Imagine-se desenhando esses lados no ar, criando um polígono único e intrigante.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/poligono'} img={polygon} titulo={'Explorando o Enigmático Polígono Regular!'} texto={
                'Bem-vindos à página do Polígono Regular, onde a matemática se desdobra em n lados de igualdade e harmonia. Imagine-se traçando esses lados, conectando vértices e desvendando os segredos dessa figura geométrica versátil.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/quadrado'} img={square} titulo={'Explorando o Fascinante Cuboide!'} texto={
                'Bem-vindos à página do Cuboide, onde a geometria se desdobra em três dimensões. Imagine um retângulo que ganha profundidade, estendendo-se como um bloco mágico.'
            }
            ></Formas>
            <Formas site={'/pagina-calculo/cuboide'} img={cuboid} titulo={'Explorando o Fascinante Cuboide!'} texto={
                'Bem-vindos à página do Cuboide, onde a geometria se desdobra em três dimensões. Imagine um retângulo que ganha profundidade, estendendo-se como um bloco mágico.'
            }
            ></Formas>
        </div>
    );
}