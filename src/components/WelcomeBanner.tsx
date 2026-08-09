import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const heroImage = require("../assets/Salsa_Welcome_Image.png");

interface WelcomeBannerProps {
  onClaimPress: () => void;
}

export default function WelcomeBanner({ onClaimPress }: WelcomeBannerProps) {
  const [isSalsaHovered, setIsSalsaHovered] = useState(false);

  return (
    <View style={styles.container}>
      {/* Left Column: Text & Call to Action */}
      <View style={styles.textColumn}>
        {/* Swapped plain "Welcome" for a warm, inviting title */}
        <Text style={styles.header}>Premium Pet Care, Tailored with Love</Text>

        <Text style={styles.promptText}>Do you need someone to...</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • ...give your high-energy dog the undivided attention they deserve?
          </Text>
          <Text style={styles.bulletItem}>
            • ...break up long workdays with a reliable, enriching quick
            check-in?
          </Text>
          <Text style={styles.bulletItem}>
            • ...provide premium, stress-free care while you are away from home?
          </Text>
        </View>

        <Text style={styles.paragraph}>
          At Walkies & More, we treat your pets like family and your peace of
          mind is our profession. We pair premium customer service with genuine
          care, ensuring every walk, drop-in, and overnight stay is backed by
          strict quality control and absolute reliability.
        </Text>

        <TouchableOpacity style={styles.heroButton} onPress={onClaimPress}>
          <Text style={styles.heroButtonText}>Claim Your Free Trial Walk</Text>
        </TouchableOpacity>
      </View>

      {/* Right Column: Interactive Image */}
      <View style={styles.imageColumn}>
        <Pressable
          style={styles.imageContainer}
          onHoverIn={() => setIsSalsaHovered(true)}
          onHoverOut={() => setIsSalsaHovered(false)}
          onPressIn={() => setIsSalsaHovered(true)}
          onPressOut={() => setIsSalsaHovered(false)}
        >
          <Image
            source={heroImage}
            style={styles.heroImage}
            resizeMode="contain"
          />

          {/* The Dark Overlay */}
          {isSalsaHovered && (
            <View style={styles.overlay}>
              <Text style={styles.overlayTitle}>Salsa</Text>
              <Text style={styles.overlayText}>Boston Terrier</Text>
              <Text style={styles.overlayText}>Age: 7</Text>
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 60,
    paddingHorizontal: SIZES.xxLarge,
    backgroundColor: COLOURS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.primary,
    alignItems: "center",
  },
  textColumn: {
    flex: 1,
    paddingRight: SIZES.xxLarge,
  },
  header: {
    color: COLOURS.primaryDark,
    fontSize: 38, // Larger and much more impactful
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.large,
    lineHeight: 46,
  },
  promptText: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large, // Bumping up size for readability
    fontWeight: "600",
    marginBottom: SIZES.small,
  },
  bulletList: {
    marginBottom: SIZES.large,
    paddingLeft: SIZES.small,
  },
  bulletItem: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 22,
    marginBottom: 6,
  },
  paragraph: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 26, // Expanded line height so blocks of text are effortless to read
    marginBottom: SIZES.xLarge,
  },
  heroButton: {
    backgroundColor: COLOURS.accent,
    paddingVertical: 16,
    paddingHorizontal: SIZES.xxLarge,
    borderRadius: 8,
    alignSelf: "flex-start",
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  heroButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: SIZES.large,
  },
  imageColumn: {
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 16,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayTitle: {
    color: "#fff",
    fontSize: SIZES.xxLarge,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  overlayText: {
    color: "#fff",
    fontSize: SIZES.large,
    marginBottom: 4,
  },
});
