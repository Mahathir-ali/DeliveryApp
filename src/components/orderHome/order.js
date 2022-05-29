import { ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import Text from "../text/text";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { useNavigation } from "@react-navigation/native";

export const Button = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details");
      }}
    >
      <Text style={{ textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
};

export default function Order() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={require("../../../assets/images/Icon.png")} />
        </View>
        <Text
          preset="h1"
          style={{
            fontWeight: "700",
            textAlign: "center",
            marginTop: spacing[3],
          }}
        >
          Non-Contact
        </Text>
        <Text preset="h1" style={{ fontWeight: "700", textAlign: "center" }}>
          Deliveries
        </Text>
        <Text
          preset="small"
          style={{
            textAlign: "center",
            color: "grey",
            marginTop: spacing[5],
            letterSpacing: 1,
            lineHeight: 18,
          }}
        >
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <View style={styles.OrderBtn}>
          <Button title="Order Now"></Button>
        </View>
        <View style={styles.DismissBtn}>
          <Button title="Dismiss" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[8],
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing[12],
  },
  OrderBtn: {
    backgroundColor: colors.lightGreen,
    padding: spacing[2],
    width: 250,
    marginTop: spacing[5],
    borderRadius: 5,
  },
  DismissBtn: {
    backgroundColor: colors.lightGrey,
    padding: spacing[2],
    width: 250,
    marginTop: spacing[2],
    borderRadius: 5,
  },
});
