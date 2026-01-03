import Header from '../Header';
import Banner from './Banner/Banner';
import TextoInicial from './TextoPrincipal/TextoInicial';
import ConjuntoDeFormas from './Conteudo/ConjuntoDeFormas';
import Footer from '../Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Banner></Banner>
      <TextoInicial></TextoInicial>
      <ConjuntoDeFormas></ConjuntoDeFormas>
      <Footer></Footer>
    </>
  );
}
