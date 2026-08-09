import { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const cookieIcon = require("../assets/Cookies_Icon.png");
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const injectAnalytics = () => {
    if (Platform.OS === "web" && typeof window !== "undefined") {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(script2);
    }
  };

  const handleAccept = () => {
    setIsVisible(false);
    injectAnalytics();
  };
  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <View style={styles.bannerContainer}>
      <View
        style={[styles.contentWrapper, isMobile && styles.contentWrapperMobile]}
      >
        <View style={[styles.textGroup, isMobile && styles.textGroupMobile]}>
          <Image
            source={cookieIcon}
            style={styles.iconImage}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.header}>
              We use cookies! (And we don't mean the dog treats)
            </Text>
            <Text style={styles.paragraph}>
              Just like Nacho and Salsa, this website loves cookies. We use
              essential digital cookies to ensure the site runs smoothly, and
              optional analytics cookies to help us improve. By clicking "Sounds
              Good!", you consent to our use of these technical cookies.
            </Text>
          </View>
        </View>

        <View style={[styles.buttonRow, isMobile && styles.buttonRowMobile]}>
          <TouchableOpacity
            style={[styles.declineButton, isMobile && styles.fullWidthButton]}
            onPress={handleDecline}
          >
            <Text style={styles.declineButtonText}>No Thanks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.acceptButton, isMobile && styles.fullWidthButton]}
            onPress={handleAccept}
          >
            <Text style={styles.acceptButtonText}>Sounds Good!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOURS.background,
    borderTopWidth: 2,
    borderTopColor: COLOURS.primary,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.xxLarge,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 999,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 1000,
    marginHorizontal: "auto",
    gap: SIZES.large,
    justifyContent: "space-between",
  },
  textGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.large,
    flex: 1,
  },
  iconImage: { width: 45, height: 45, tintColor: COLOURS.primaryDark },
  textContainer: { flex: 1 },
  header: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 4,
  },
  paragraph: { color: COLOURS.text, fontSize: SIZES.medium, lineHeight: 20 },
  buttonRow: { flexDirection: "row", gap: SIZES.medium, alignItems: "center" },
  declineButton: {
    paddingVertical: 12,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  },
  declineButtonText: {
    color: COLOURS.primaryDark,
    fontWeight: "600",
    fontSize: SIZES.medium,
  },
  acceptButton: {
    backgroundColor: COLOURS.accent,
    paddingVertical: 12,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  /* --- NEW MOBILE STYLES --- */
  contentWrapperMobile: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  textGroupMobile: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  buttonRowMobile: {
    flexDirection: "column-reverse", // Puts "Sounds Good" on top!
    width: "100%",
  },
  fullWidthButton: {
    width: "100%",
  },
});
