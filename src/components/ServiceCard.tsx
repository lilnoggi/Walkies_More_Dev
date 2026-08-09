import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions, // 1. Import the hook
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  isTrial?: boolean;
  iconSource: ImageSourcePropType;
  onPress?: () => void;
}

export default function ServiceCard({
  title,
  description,
  price,
  buttonText,
  isTrial = false,
  iconSource,
  onPress,
}: ServiceCardProps) {
  // 2. Measure the screen
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    // 3. Apply the mobile class to expand the card width!
    <View style={[styles.card, isMobile && styles.cardMobile]}>
      <View style={styles.iconContainer}>
        <Image
          source={iconSource}
          style={styles.iconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {!isTrial && price && <Text style={styles.price}>{price}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isTrial ? COLOURS.alert : COLOURS.accent },
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.large,
    width: 300,
    margin: SIZES.small,
    alignItems: "center",
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  /* --- NEW MOBILE STYLES --- */
  cardMobile: {
    width: "100%", // Tells the card to stretch across the phone screen!
    maxWidth: 380, // Prevents it from getting comically large on iPads
    marginHorizontal: 0,
  },
  iconContainer: {
    marginBottom: SIZES.medium,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    tintColor: COLOURS.primaryDark,
  },
  title: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: SIZES.small,
  },
  description: {
    color: COLOURS.text,
    fontSize: SIZES.small,
    textAlign: "center",
    lineHeight: 18,
    marginBottom: SIZES.large,
    flex: 1,
  },
  price: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontWeight: "bold",
    marginBottom: SIZES.large,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: COLOURS.text,
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});
