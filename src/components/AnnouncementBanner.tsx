import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const boneIcon = require("../assets/Bone_Icon.png");
const closeIcon = require("../assets/Close_Icon.png");

interface AnnouncementBannerProps {
  onPress: () => void;
}

export default function AnnouncementBanner({
  onPress,
}: AnnouncementBannerProps) {
  // State to track if the banner has been dismissed
  const [isVisible, setIsVisible] = useState(true);

  // If they closed it, don't render the banner at all
  if (!isVisible) return null;

  return (
    <View style={styles.bannerWrapper}>
      {/* The Clickable Text & Bones */}
      <TouchableOpacity
        style={styles.clickableArea}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Image source={boneIcon} style={styles.boneIcon} resizeMode="contain" />
        <Text style={styles.bannerText}>
          Become a Founding Client! Enjoy 25% off your first month of care.
          Limited to our first 10 clients in Marlborough. Tap here to claim!
        </Text>
        <Image source={boneIcon} style={styles.boneIcon} resizeMode="contain" />
      </TouchableOpacity>

      {/* The Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsVisible(false)}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} // Makes the small X easier to tap on mobile
      >
        <Image
          source={closeIcon}
          style={styles.closeIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    backgroundColor: COLOURS.accent,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    zIndex: 10,
    position: "relative",
  },
  clickableArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: SIZES.xxLarge,
  },
  boneIcon: {
    width: 20,
    height: 20,
    // tintColor: "#fff", // Turns the dark icon white
    marginHorizontal: SIZES.small,
  },
  bannerText: {
    color: "#fff",
    fontSize: SIZES.medium,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  closeButton: {
    position: "absolute",
    right: SIZES.large,
    padding: 4,
  },
  closeIcon: {
    width: 14,
    height: 14,
    tintColor: "#fff", // Turns the dark icon white
  },
});
