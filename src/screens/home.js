import { StyleSheet, ScrollView, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import Order from "../components/orderHome/order";
import { spacing } from "../theme/spacing";

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{ height: 300, padding: spacing[6], marginTop: spacing[8] }}
        >
          <View>
            <Image source={require("../../assets/images/logo.png")} />
          </View>
        </View>
        <ScrollView style={styles.itemDetails}>
          <Order />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
  },
  itemDetails: {
    backgroundColor: colors.lightGrey,
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55,
  },
});
