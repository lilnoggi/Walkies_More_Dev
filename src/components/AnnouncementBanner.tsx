import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const boneIcon = require("../assets/Bone_Icon.png");
const closeIcon = require("../assets/Close_Icon.png");

interface AnnouncementBannerProps {
  onPress: () => void;
}

export default function AnnouncementBanner({
  onPress,
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  if (!isVisible) return null;

  return (
    <View style={styles.bannerWrapper}>
      <TouchableOpacity
        style={[styles.clickableArea, isMobile && styles.clickableAreaMobile]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {!isMobile && (
          <Image
            source={boneIcon}
            style={styles.boneIcon}
            resizeMode="contain"
          />
        )}
        <Text style={[styles.bannerText, isMobile && styles.bannerTextMobile]}>
          Become a Founding Client! Enjoy 25% off your first month of care.
          Limited to our first 10 clients in Marlborough. Tap here to claim!
        </Text>
        {!isMobile && (
          <Image
            source={boneIcon}
            style={styles.boneIcon}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsVisible(false)}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
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
    tintColor: "#fff",
  },
  /* --- NEW MOBILE STYLES --- */
  clickableAreaMobile: {
    paddingHorizontal: SIZES.large,
    paddingRight: SIZES.xxLarge, // Gives extra room for the absolute close button!
  },
  bannerTextMobile: {
    fontSize: SIZES.small,
  },
});
