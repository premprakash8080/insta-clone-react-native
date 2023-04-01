import { View, Text } from "react-native";
import React from "react";

const INSTAGRAM_LOGO =
  "https://img.icons8.com/fluency/96/null/instagram-new.png";

const LoginScreen = () => (
  <View style={StyleSheet.container}>
    <View style={StyleSheet.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItmes: "center",
  },
});

export default LoginScreen;
