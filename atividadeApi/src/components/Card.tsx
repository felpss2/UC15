import { RepositoriesDTO } from "../ts/repositories";
import { TextoCard, ViewCard } from "../ts/stylesCard";


interface CardProps {
  item: RepositoriesDTO;
}

const Card = ({ item }: CardProps) => {
  return (
    <ViewCard>
      <TextoCard>Repositório: {item.name}</TextoCard>
      <TextoCard>Linguagem: {item.language ?? "Não definida"}</TextoCard>
    </ViewCard>
  );
};

export default Card;