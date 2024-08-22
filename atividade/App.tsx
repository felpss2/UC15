import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <view>
        <Text>Ai que não sei o que lá</Text>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{ uri: "https://placehold.it/150x150" }}
        />
      </view>

      <view>
        <Image
          style={{
            width: "100%",
            height: 350,
          }}
          source={require("./image/astra.png")}
        />
      </view>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
