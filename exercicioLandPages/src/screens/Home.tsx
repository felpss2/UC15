import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/card";
import Cabecalho from "../components/header";
import Rodape from "../components/footer";

const Home = () => {
  return (
    <SafeAreaView>
      <Cabecalho />
      <Card/> 
      <Rodape />
    </SafeAreaView>
  );
};

export default Home;
