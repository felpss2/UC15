import { FlatList } from "react-native";
import { ViewMain } from "../ts/styles";
import { RepositoriesDTO } from "../ts/repositories";
import Card from "./Card";

interface MainProps {
  repositoriesList: RepositoriesDTO[];
}

const Main = ({ repositoriesList }: MainProps) => {
  return (
    <ViewMain>
      <FlatList
        data={repositoriesList}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ViewMain>
  );
};

export default Main;



