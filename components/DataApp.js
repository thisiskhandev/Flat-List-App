import { StyleSheet } from "react-native";
import { FlatList, View, Text } from "react-native";

const DataApp = (props) => {
  const names = [
    {
      index: "1",
      name: "Khan",
    },
    {
      index: "2",
      name: "Abdul hadi",
    },
    {
      index: "3",
      name: "Faraz",
    },
    {
      index: "4",
      name: "Adil",
    },
    {
      index: "5",
      name: "Abdul hadi",
    },
    {
      index: "6",
      name: "Faraz",
    },
    {
      index: "7",
      name: "Adil",
    },
  ];
  return (
    <FlatList
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      inverted={props.inverted}
      data={names}
      renderItem={({ item }) => {
        console.log(item);
        let ArrayOfAnObject = item.name;
        return (
          <View style={styles.box}>
            <Text style={styles.title}>
              {item.index + " " + ArrayOfAnObject}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    paddingVertical: 80,
    backgroundColor: "#333",
    borderRadius: 8,
    margin: 10,
    width: 300,
    textAlign: "center",
    color: "#fff",
  },
});

export default DataApp;
