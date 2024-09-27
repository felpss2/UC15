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

  return (
    <ContainerCentral>


    </ContainerCentral>
  );
};
export default Card;
