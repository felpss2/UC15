import styled from "styled-components/native";


export const Container = styled.View`
  height: 250px;
  width: 250px;
  background-color: grey;
  border-radius: 20px;

`;

export const ContainerCentral = styled.View`
  height: 295px;
  width: 100%;
  padding-top: 10%;
  align-items: center;
  padding-bottom: 10%;
  background-color: #16232e;
`;

export const Titulo = styled.Text`
font-size: 20px;
color: aliceblue;
`
export const TextoPrincipal = styled.Text`
font-size: 16px;
`

export const CampoNome = styled.TextInput`
width: 250px;
height: 25px;
border: 2px;
background-color: white;
`

export const ViewTexto = styled.View`
width:240px;
`
export const BotaoLogin = styled.TouchableOpacity`
  background-color: #044040;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 70px;
  margin-top: 20px;
`;
