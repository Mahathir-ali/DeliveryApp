import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "../text/text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";

export const Button = ({ title }) => {
  return (
    <Pressable onPress={() => {}}>
      <Text style={{ textAlign: "center", color: colors.white }}>{title}</Text>
    </Pressable>
  );
};

export default function OrderDetails() {
  return (
    <View style={styles.container}>
      <Text preset="h1" style={{ fontWeight: "bold", color: colors.black }}>
        Boston Lettuce
      </Text>
      <View style={styles.price}>
        <Text preset="h1" style={{ fontWeight: "bold", color: colors.black }}>
          1.10
        </Text>
        <Text preset="h3" style={{ color: "grey", marginLeft: 20 }}>
          <FontAwesome5 name="euro-sign" size={24} color="grey" /> / piece
        </Text>
      </View>
      <Text style={{ marginTop: spacing[2], color: colors.lightGreen }}>
        ~ 150 gr / piece
      </Text>
      <View style={{ marginTop: spacing[10] }}>
        <Text preset="h3" style={{ fontWeight: "bold" }}>
          Spain
        </Text>
        <Text style={{ color: "grey", marginTop: spacing[5] }}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
      </View>
      <View>
        <View style={styles.btn}>
          <View style={styles.favBtn}>
            <Feather name="heart" size={24} color="grey" />
          </View>
          <View style={styles.cartBtn}>
            <Ionicons
              name="cart-outline"
              size={24}
              color="white"
              style={{ marginRight: spacing[5] }}
            />
            <Button title="ADD TO CART" color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[5],
    padding: spacing[8],
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing[10],
  },
  favBtn: {
    width: 78,
    height: 56,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  cartBtn: {
    width: 240,
    height: 56,
    backgroundColor: colors.lightGreen,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    // padding: spacing[4],
  },
});
