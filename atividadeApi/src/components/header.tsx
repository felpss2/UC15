import { Header, Pesquisa, TextoApresentacao, CampoNome } from "../ts/stylesHeader";


const Cabecalho = () => {

  return (

    <Header>
      <CampoNome><TextoApresentacao>Repositorios</TextoApresentacao></CampoNome>
      <Pesquisa></Pesquisa>

    </Header>
  );
};

export default Cabecalho;
