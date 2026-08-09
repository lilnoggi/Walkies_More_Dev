import { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const cookieIcon = require("../assets/Cookies_Icon.png");

// 1. Paste your Google Analytics Measurement ID here!
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // 2. This function dynamically injects the tracking code ONLY when called
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
    injectAnalytics(); // Fire up the analytics!
  };

  const handleDecline = () => {
    setIsVisible(false); // Hide the banner, but DO NOT fire analytics.
  };

  if (!isVisible) return null;

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.contentWrapper}>
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

        {/* 3. The New Button Layout */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.declineButton}
            onPress={handleDecline}
          >
            <Text style={styles.declineButtonText}>No Thanks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
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
  },
  iconImage: {
    width: 45,
    height: 45,
    tintColor: COLOURS.primaryDark,
  },
  textContainer: {
    flex: 1,
  },
  header: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 4,
  },
  paragraph: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: SIZES.medium,
    alignItems: "center",
  },
  declineButton: {
    paddingVertical: 12,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
  },
  declineButtonText: {
    color: COLOURS.primaryDark, // Uses a subtle colour so it's visible but not the primary focus
    fontWeight: "600",
    fontSize: SIZES.medium,
  },
  acceptButton: {
    backgroundColor: COLOURS.accent,
    paddingVertical: 12,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: 8,
    justifyContent: "center",
  },
  acceptButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});
