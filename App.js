import { View, Text, StyleSheet, Image } from "react-native";
import DataApp from "./components/DataApp";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
        }}
      />
      <DataApp />
      <DataApp inverted="true" />
      <Text style={styles.heading}>NetFlix</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 30,
    color: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});

export default App;
