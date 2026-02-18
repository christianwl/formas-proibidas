import { useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import BannerForma from './BannerCalculo/BannerForma';
import AreaDeCalculo from './ConteudoCalculo/AreaDeCalculo';

import circle from '@/assets/img/formas/circle.png';
import cube from '@/assets/img/formas/cube.svg';
import rectangle from '@/assets/img/formas/rectangle.svg';
import rhombohedron from '@/assets/img/formas/rhombohedron.svg';
import trapeze from '@/assets/img/formas/trapeze.svg';
import polygon from '@/assets/img/formas/polygon.svg';
import square from '@/assets/img/formas/square.svg';
import cuboid from '@/assets/img/formas/cuboid.svg';

import './PaginaFormas.css';


var listaFormas = [{
    id: 'circulo',
    titulo: 'Circulo',
    imagem: circle,
    texto: 'O círculo é uma figura geométrica plana que consiste em todos os pontos que estão a uma mesma distância de um ponto central chamado centro. Essa distância é conhecida como raio do círculo. O círculo é uma forma fechada, não possui arestas ou vértices, e é caracterizado por sua simetria radial 12.\n\nVisualize um disco perfeito, uma roda que gira sem esforço. O círculo é essa harmonia, essa união de infinitos pontos equidistantes. Ele nos envolve, nos abraça com sua curvatura suave.',
    info: 'O círculo é uma figura geométrica que nos envolve com sua elegância e simetria. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Círculo (A) = π × raio ao quadrado (r²)\n\nAqui estão os detalhes:π (pi) é uma constante matemática aproximadamente igual a 3,14.\n\nRaio ® é a distância entre o centro do círculo e qualquer ponto na sua borda.\n\nImagine que você está dançando em torno do centro do círculo, como um bailarino matemático. O raio é a sua ligação com o centro, e o quadrado dele é a base para calcular a área. Multiplicamos esse quadrado pelo valor de π para obter a área total.\n\nSe você tiver o diâmetro (que é o dobro do raio), basta dividir o diâmetro por 2 para encontrar o raio e aplicar a fórmula.',
    label: ['raio']
},
{
    id: 'cubo',
    titulo: 'Cubo',
    imagem: cube,
    texto: 'O cubo é uma figura geométrica sólida que consiste em seis faces quadradas iguais, cada uma conectada a quatro outras, formando um todo coeso. Cada aresta do cubo é conhecida como lado, e todas têm o mesmo comprimento. O cubo é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria tridimensional 12.\n\nVisualize um bloco perfeito, um dado que rola sem esforço. O cubo é essa estabilidade, essa união de seis faces iguais. Ele nos envolve, nos abraça com sua estrutura robusta.',
    info: 'O cubo é uma figura geométrica que nos fascina com sua perfeição e simetria. Para calcular seu volume, utilizamos uma fórmula simples: \n\nVolume do Cubo (V) = lado ao cubo (a³)\n\nAqui estão os detalhes: \n\nLado (a) é a distância entre dois pontos adjacentes em qualquer face do cubo.\n\nImagine que você está dançando em torno do centro do cubo, como um bailarino matemático. O lado é a sua ligação com cada vértice, e o cubo dele é a base para calcular o volume. Multiplicamos esse cubo pelo valor de 1 para obter o volume total.\n\nSe você tiver a diagonal (que é a raiz quadrada de 3 vezes o lado), basta dividir a diagonal pela raiz quadrada de 3 para encontrar o lado e aplicar a fórmula.',
    label: ['lado']
},
{
    id: 'retangulo',
    titulo: 'Retangulo',
    imagem: rectangle,
    texto: 'O retângulo é uma figura geométrica plana que consiste em quatro pontos conectados por quatro linhas retas, formando quatro ângulos retos. Cada linha reta do retângulo é conhecida como lado, e os lados opostos têm o mesmo comprimento. O retângulo é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria bilateral 12.\n\nVisualize uma folha de papel perfeita, um livro que se abre sem esforço. O retângulo é essa estabilidade, essa união de quatro lados proporcionais. Ele nos envolve, nos abraça com sua estrutura reta.',
    info: 'O retângulo é uma figura geométrica que nos cativa com sua simplicidade e equilíbrio. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Retângulo (A) = base (b) × altura (h)\n\nAqui estão os detalhes: \n\nBase (b) e Altura (h) são as distâncias entre os lados opostos do retângulo.\n\nImagine que você está dançando em torno do centro do retângulo, como um bailarino matemático. A base e a altura são suas ligações com os lados, e o produto delas é a base para calcular a área. Multiplicamos esse produto pelo valor de 1 para obter a área total.\n\nSe você tiver a diagonal (que é a raiz quadrada da soma dos quadrados da base e da altura), basta aplicar o teorema de Pitágoras para encontrar a base e a altura e aplicar a fórmula.',
    label: ['comprimento', 'largura']
},
{
    id: 'romboedro',
    titulo: 'Romboedro',
    imagem: rhombohedron,
    texto: 'O romboedro é uma figura geométrica sólida que consiste em seis faces em forma de losango, cada uma conectada a quatro outras, formando um todo coeso. Cada aresta do romboedro é conhecida como lado, e todas têm o mesmo comprimento. O romboedro é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria tridimensional 12.\n\nVisualize um cristal perfeito, uma joia que reflete a luz sem esforço. O romboedro é essa elegância, essa união de seis faces iguais. Ele nos envolve, nos abraça com sua estrutura angular.',
    info: 'O romboedro é uma figura geométrica que nos encanta com sua complexidade e harmonia. Para calcular seu volume, utilizamos uma fórmula simples: \n\nVolume do Romboedro (V) = área da base (A) × altura (h)\n\nAqui estão os detalhes: \n\nA área da base (A) é a área de qualquer face do romboedro, que é um losango. A altura (h) é a distância perpendicular entre duas faces opostas.\n\nImagine que você está dançando em torno do centro do romboedro, como um bailarino matemático. A área da base e a altura são suas ligações com as faces, e o produto delas é a base para calcular o volume. Multiplicamos esse produto pelo valor de 1 para obter o volume total.\n\nSe você tiver a diagonal espacial (que é a maior diagonal do romboedro), basta aplicar a fórmula adequada para encontrar a área da base e a altura e aplicar a fórmula.',
    label: ['diagonalA', 'diagonalB']
},
{
    id: 'trapezio',
    titulo: 'Trapézoide Irregular',
    imagem: trapeze,
    texto: 'O trapézio é uma figura geométrica plana que consiste em quatro pontos conectados por quatro linhas retas, formando dois ângulos retos e dois ângulos agudos ou obtusos. Cada linha reta do trapézio é conhecida como lado, e os lados opostos podem ter comprimentos diferentes. O trapézio é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria bilateral parcial 12.\n\nVisualize uma rampa perfeita, uma ladeira que desce sem esforço. O trapézio é essa inclinação, essa união de quatro lados desiguais. Ele nos envolve, nos abraça com sua estrutura inclinada.',
    info: 'O trapézio irregular é uma figura geométrica que nos surpreende com sua flexibilidade e diversidade. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Trapézio Irregular (A) = (base maior (B) + base menor (b)) / 2 × altura (h)\n\nAqui estão os detalhes: \n\nBase maior (B) e base menor (b) são os lados paralelos do trapézio. A altura (h) é a distância perpendicular entre as bases.\n\nImagine que você está dançando em torno do centro do trapézio, como um bailarino matemático. As bases e a altura são suas ligações com os lados, e o produto da média aritmética das bases pela altura é a base para calcular a área. Multiplicamos esse produto pelo valor de 1 para obter a área total.\n\nSe você tiver as diagonais (que são as linhas que conectam os vértices opostos), basta aplicar a fórmula adequada para encontrar as bases e a altura e aplicar a fórmula.',
    label: ['base1', 'base2', 'altura']
},
{
    id: 'poligono',
    titulo: 'Poligono Regular com N Lados',
    imagem: polygon,
    texto: 'O polígono regular de n lados é uma figura geométrica plana que consiste em n pontos conectados por n linhas retas, formando um todo coeso. Cada linha reta do polígono é conhecida como lado, e todos os lados têm o mesmo comprimento. O polígono regular é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria radial 12.\n\nVisualize uma moeda perfeita, um carrossel que gira sem esforço. O polígono regular de n lados é essa harmonia, essa união de n lados iguais. Ele nos envolve, nos abraça com sua estrutura equilibrada.',
    info: 'O polígono regular com n lados é uma figura geométrica que nos desafia com sua versatilidade e uniformidade. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Polígono Regular (A) = n × (comprimento do lado (s)²) / (4 × tangente de (180/n))\n\nAqui estão os detalhes: \n\nO número de lados (n) é a quantidade de lados iguais do polígono. O comprimento do lado (s) é a distância entre dois pontos adjacentes.\n\nImagine que você está dançando em torno do centro do polígono, como um bailarino matemático. O comprimento do lado é a sua ligação com cada vértice, e a fórmula acima é a base para calcular a área. Multiplicamos o quadrado do comprimento do lado pelo número de lados e dividimos por 4 vezes a tangente de 180 dividido pelo número de lados para obter a área total.\n\nSe você tiver o raio (que é a distância do centro a qualquer vértice), basta aplicar a fórmula adequada para encontrar o comprimento do lado e aplicar a fórmula.',
    label: ['comprimento'],
    tipo: ['Pentágono', 'Hexágono', 'Heptágono']
},
{
    id: 'quadrado',
    titulo: 'Quadrado',
    imagem: square,
    texto: 'O quadrado é uma figura geométrica plana que consiste em quatro pontos conectados por quatro linhas retas, formando quatro ângulos retos. Cada linha reta do quadrado é conhecida como lado, e todos os lados têm o mesmo comprimento. O quadrado é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria bilateral 12.\n\nVisualize um azulejo perfeito, um xadrez que se encaixa sem esforço. O quadrado é essa estabilidade, essa união de quatro lados iguais. Ele nos envolve, nos abraça com sua estrutura reta.',
    info: 'O quadrado é uma figura geométrica que nos encanta com sua igualdade e equilíbrio. Para calcular sua área, utilizamos uma fórmula simples: \n\nÁrea do Quadrado (A) = lado ao quadrado (a²)\n\nAqui estão os detalhes: \n\nLado (a) é a distância entre dois pontos adjacentes em qualquer face do quadrado.\n\nImagine que você está dançando em torno do centro do quadrado, como um bailarino matemático. O lado é a sua ligação com cada vértice, e o quadrado dele é a base para calcular a área. Multiplicamos esse quadrado pelo valor de 1 para obter a área total.\n\nSe você tiver a diagonal (que é a raiz quadrada de 2 vezes o lado), basta dividir a diagonal pela raiz quadrada de 2 para encontrar o lado e aplicar a fórmula.',
    label: ['lado']
},
{
    id: 'cuboide',
    titulo: 'Cubóide',
    imagem: cuboid,
    texto: 'O cubóide é uma figura geométrica sólida que consiste em seis faces retangulares, cada uma conectada a quatro outras, formando um todo coeso. Cada aresta do cubóide é conhecida como lado, e os lados opostos têm o mesmo comprimento. O cubóide é uma forma fechada, possui arestas e vértices, e é caracterizado por sua simetria tridimensional 12.\n\nVisualize um tijolo perfeito, um prédio que se ergue sem esforço. O cubóide é essa estabilidade, essa união de seis faces retangulares. Ele nos envolve, nos abraça com sua estrutura robusta.',
    info: 'O cubóide é uma figura geométrica que nos impressiona com sua estrutura e estabilidade. Para calcular seu volume, utilizamos uma fórmula simples: \n\nVolume do Cubóide (V) = comprimento (l) × largura (w) × altura (h)\n\nAqui estão os detalhes: \n\nComprimento (l), Largura (w) e Altura (h) são as distâncias entre os lados opostos do cubóide.\n\nImagine que você está dançando em torno do centro do cubóide, como um bailarino matemático. O comprimento, a largura e a altura são suas ligações com as faces, e o produto delas é a base para calcular o volume. Multiplicamos esse produto pelo valor de 1 para obter o volume total.\n\nSe você tiver a diagonal espacial (que é a raiz quadrada da soma dos quadrados do comprimento, largura e altura), basta aplicar o teorema de Pitágoras para encontrar o comprimento, a largura e a altura e aplicar a fórmula.',
    label: ['comprimento', 'largura', 'altura']
}];

export default function PaginaFormas() {
    const { forma } = useParams();
    const navigate = useNavigate();

    const objetoForma = listaFormas.find(objeto => objeto.id === forma);

    const BtnFunction = (increment) => {
        const index = listaFormas.findIndex(objeto => objeto.id === forma);
        if ((increment === -1 && index > 0) || (increment === 1 && index < listaFormas.length - 1)) {
            const novaForma = listaFormas[index + increment].id;
            navigate(`/pagina-calculo/${novaForma}`)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [navigate]);
    
    return (
        <>
            <Header />
            <BannerForma
                img={objetoForma.imagem}
                nome={objetoForma.titulo}
                texto={objetoForma.texto}>
            </BannerForma>

            <div className='bg'>
                <div className='btns'>
                    <button id='btnVoltar' onClick={() => BtnFunction(-1)} disabled={forma === 'circulo'}>Forma Anterior</button>
                    <button id='btnProximo' onClick={() => BtnFunction(+1)} disabled={forma === 'cuboide'}>Próxima Forma</button>
                </div>

                <AreaDeCalculo
                    subtitulo={objetoForma.titulo}
                    infoCalc={objetoForma.info}
                    objeto={objetoForma}>
                </AreaDeCalculo>

                <Footer></Footer>
            </div>
        </>
    );
}

