import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const settings = {
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    alignItems: ["center", "flex-end", "flex-start", "stretch", "baseline"],
    justifyContent: [
      "center",
      "flex-start",
      "flex-end",
      "space-around",
      "space-evenly",
      "space-between",
    ],
  };
  const [flexDirection, setFlexDirection] = useState("column");
  const [alignItems, setAlignItems] = useState("flex-start");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  return (
    <InteractiveLayout
      directionValues={settings.flexDirection}
      alignItemsValues={settings.alignItems}
      justifyContentValues={settings.justifyContent}
      flexDirection={flexDirection}
      setFlexDirection={setFlexDirection}
      alignItems={alignItems}
      setAlignItems={setAlignItems}
      justifyContent={justifyContent}
      setJustifyContent={setJustifyContent}
    >
      <Text style={styles.flexItem}>Cell-1</Text>
      <Text style={styles.flexItem}>Cell-2</Text>
      <Text style={styles.flexItem}>Cell-3</Text>
    </InteractiveLayout>
  );
}

const InteractiveLayout = ({
  directionValues,
  alignItemsValues,
  justifyContentValues,
  children,
  flexDirection,
  setFlexDirection,
  alignItems,
  setAlignItems,
  justifyContent,
  setJustifyContent,
}) => (
  <ScrollView
    style={{ flex: 1, backgroundColor: "#111111" }}
    contentContainerStyle={{ padding: 20 }}
  >
    <StatusBar backgroundColor="#111111" barStyle="light-content" />
    <View>
      <Text style={styles.headerText}>Interactive</Text>
      <Text style={styles.labelText}>
        Below is an interactive demo that lets you visualize different settings
        of a layout:
      </Text>
    </View>
    <View
      style={[
        styles.demoContainer,
        {
          flexDirection: flexDirection,
          alignItems: alignItems,
          justifyContent: justifyContent,
          height: 350,
        },
      ]}
    >
      {children}
    </View>

    <View style={styles.demoContainer}>
      <Text style={{ color: "white", fontSize: 14 }}>flexDirection</Text>
      <View style={styles.actionsContainer}>
        {directionValues.map((v, i) => (
          <TouchableOpacity
            style={[styles.button, flexDirection === v && styles.selected]}
            key={i}
            onPress={() => setFlexDirection(v)}
          >
            <Text
              style={[
                styles.buttonLabel,
                flexDirection === v && styles.selectedLabel,
              ]}
            >
              {v}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ color: "white", fontSize: 14 }}>alignItems</Text>
      <View style={styles.actionsContainer}>
        {alignItemsValues.map((v, i) => (
          <TouchableOpacity
            style={[styles.button, alignItems === v && styles.selected]}
            key={i}
            onPress={() => setAlignItems(v)}
          >
            <Text
              style={[
                styles.buttonLabel,
                alignItems === v && styles.selectedLabel,
              ]}
            >
              {v}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ color: "white", fontSize: 14 }}>justifyContent</Text>
      <View style={styles.actionsContainer}>
        {justifyContentValues.map((v, i) => (
          <TouchableOpacity
            style={[styles.button, justifyContent === v && styles.selected]}
            key={i}
            onPress={() => setJustifyContent(v)}
          >
            <Text
              style={[
                styles.buttonLabel,
                justifyContent === v && styles.selectedLabel,
              ]}
            >
              {v}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    fontSize: 28,
  },
  labelText: {
    color: "white",
    fontSize: 14,
  },
  flexItem: {
    backgroundColor: "#212121",
    padding: 20,
    color: "gray",
    borderRadius: 5,
    margin: 5,
  },
  demoContainer: {
    marginTop: 20,
  },
  actionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "powderblue",
    alignSelf: "flex-start",
    margin: 5,
  },
  selected: {
    backgroundColor: "steelblue",
  },
  buttonLabel: {
    color: "#111111",
  },
  selectedLabel: {
    color: "white",
  },
});
