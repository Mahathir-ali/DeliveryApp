import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import OrderDetails from "../components/orderDetails/orderDetails";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
  return (
    <>
      <ImageBackground
        source={require("../../assets/images/cover.png")}
        style={{ flex: 1, height: 350 }}
      >
        <SafeAreaView style={{ padding: spacing[6] }}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.container}>
        <OrderDetails />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.lightGrey,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.lightGrey,
  },
});
