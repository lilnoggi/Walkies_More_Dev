import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const logoImage = require("../assets/WalkiesAndMore_Logo.png");

interface NavBarProps {
  activeSection: string;
  onNavClick: (
    section:
      | "welcome"
      | "services"
      | "about"
      | "testimonials"
      | "contact"
      | "faq",
  ) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  // 1. Grab the live screen width!
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // If the screen is smaller than an iPad portrait, it's mobile!

  return (
    // 2. Conditionally apply mobile styles if isMobile is true
    <View style={[styles.navBar, isMobile && styles.navBarMobile]}>
      <View style={[styles.navLeft, isMobile && styles.navLeftMobile]}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        <View style={isMobile && styles.centeredText}>
          <Text style={styles.navTitle}>Walkies & More |</Text>
          <Text style={styles.navSubtitle}>Premium Dog Services</Text>
        </View>
      </View>

      <View style={[styles.navLinks, isMobile && styles.navLinksMobile]}>
        <TouchableOpacity onPress={() => onNavClick("welcome")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "welcome" && styles.activeNavLink,
            ]}
          >
            Welcome
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavClick("services")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "services" && styles.activeNavLink,
            ]}
          >
            Services
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavClick("about")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "about" && styles.activeNavLink,
            ]}
          >
            About Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavClick("testimonials")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "testimonials" && styles.activeNavLink,
            ]}
          >
            Testimonials
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavClick("contact")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "contact" && styles.activeNavLink,
            ]}
          >
            Contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavClick("faq")}>
          <Text
            style={[
              styles.navLink,
              activeSection === "faq" && styles.activeNavLink,
            ]}
          >
            FAQ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small,
    backgroundColor: COLOURS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.primary,
  },
  navLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: SIZES.small,
  },
  navTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  navSubtitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontFamily: "Georgia",
  },
  navLinks: {
    flexDirection: "row",
    gap: SIZES.large,
  },
  navLink: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  activeNavLink: {
    color: COLOURS.accent,
    fontWeight: "bold",
  },
  /* --- NEW MOBILE STYLES --- */
  navBarMobile: {
    flexDirection: "column",
    paddingVertical: SIZES.large,
    gap: SIZES.large,
  },
  navLeftMobile: {
    flexDirection: "column",
    gap: SIZES.small,
  },
  centeredText: {
    alignItems: "center",
  },
  navLinksMobile: {
    flexWrap: "wrap", // This forces links to drop to the next line instead of squishing!
    justifyContent: "center",
    gap: SIZES.medium,
  },
});
