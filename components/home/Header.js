import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            source={require("../../assets/icons-plus.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icons-fav.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11 </Text>
          </View>
          <Image
            source={require("../../assets/icons-messenger.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    // color:'white'
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 1,
    resizeMode: "contain",
    // color:'white'
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: 600,
  },
});
export default Header;
