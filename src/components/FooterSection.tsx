import { useRouter } from "expo-router"; // 1. Import the router
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const logoImage = require("../assets/WalkiesAndMore_Logo.png");
const copyrightIcon = require("../assets/Copyright_Icon.png");

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const router = useRouter(); // 2. Initialize the router

  return (
    <View style={styles.footerContainer}>
      <View style={styles.contentWrapper}>
        {/* Left Side: Branding */}
        <View style={styles.brandColumn}>
          <Image source={logoImage} style={styles.logo} resizeMode="contain" />
          <View>
            <Text style={styles.brandTitle}>Walkies & More |</Text>
            <Text style={styles.brandSubtitle}>Premium Dog Services</Text>
          </View>
        </View>

        {/* Center: Copyright */}
        <View style={styles.copyrightColumn}>
          <Image
            source={copyrightIcon}
            style={styles.copyrightIcon}
            resizeMode="contain"
          />
          <Text style={styles.copyrightText}>
            {currentYear} Walkies & More | Premium Dog Services. All rights
            reserved.
          </Text>
        </View>

        {/* Right Side: Legal Links */}
        <View style={styles.linksColumn}>
          {/* 3. Wrap the text in TouchableOpacity and set the route */}
          <TouchableOpacity onPress={() => router.push("/privacy")}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/terms")}>
            <Text style={styles.linkText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: COLOURS.background,
    borderTopWidth: 1,
    borderTopColor: COLOURS.primary,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.xxLarge,
    marginTop: SIZES.xxLarge,
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandColumn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: SIZES.small,
  },
  brandTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  brandSubtitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontFamily: "Georgia",
  },
  copyrightColumn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    tintColor: COLOURS.primaryDark,
  },
  copyrightText: {
    color: COLOURS.text,
    fontSize: SIZES.small,
  },
  linksColumn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: SIZES.large,
  },
  linkText: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
