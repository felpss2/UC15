import { useState } from "react";
import {
  ContainerCentral,
  Titulo,
  TextoPrincipal,
  CampoNome,
  ViewTexto,
  BotaoLogin,
} from "../ts/styles";
import { Platform, Text } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStorage {
  username: string;
  password: string;
}

const Card = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const storeData = async (value: IStorage) => {
    const jsonValue = JSON.stringify(value);

    if (Platform.OS !== "web") {
      try {
        await AsyncStorage.setItem("@hooks-userInfo", jsonValue);
      } catch (e) {
        console.log(e);
      }
    } else {
      localStorage.setItem("@hooks-userInfo", jsonValue);
    }
  };

  return (
    <ContainerCentral>
      <ViewTexto>
        <Titulo>Nome</Titulo>
      </ViewTexto>
      <CampoNome onChangeText={setUsername} value={username}></CampoNome>
      <ViewTexto>
        <Titulo>Senha</Titulo>
      </ViewTexto>
      <CampoNome onChangeText={setPassword} value={password}></CampoNome>
      <BotaoLogin onPress={ () => storeData({ username: username, password: password })}>
        <Titulo>Logar</Titulo>
      </BotaoLogin>
    </ContainerCentral>
  );
};
export default Card;
