import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOURS, SIZES } from "../styles/theme";
import ServiceCard from "./ServiceCard";

// Move your assets here
const dogWalkingIcon = require("../assets/DogWalking_Icon.png");
const dogSittingIcon = require("../assets/DogSitting_Icon.png");
const houseIcon = require("../assets/House_Icon.png");
const overnightIcon = require("../assets/Overnight_Icon.png");

// Import Nacho!
const nachoRunning = require("../assets/Nacho_Running_Image.png");

interface ServiceSectionProps {
  onBookPress: (serviceName: string) => void;
}

export default function ServicesSection({ onBookPress }: ServiceSectionProps) {
  // State to track if the image is being hovered or tapped
  const [isNachoHovered, setIsNachoHovered] = useState(false);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Services</Text>

      <Text style={styles.sectionSubtitle}>Dog Walking</Text>

      {/* Container to put the grid and the image side-by-side */}
      <View style={styles.rowContainer}>
        <View style={styles.grid}>
          <ServiceCard
            title="Premium Solo Walk"
            description="1-on-1 focused time for a single dog. Ideal for nervous, reactive, or senior dogs who need a slower pace."
            price="£25 - £30 / hour"
            buttonText="Book Now"
            iconSource={dogWalkingIcon}
            onPress={() => onBookPress("Premium Solo Walk")}
          />
          <ServiceCard
            title="Small Pack Walk"
            description="A social, enrichment-focused walk with a carefully matched small group of dogs."
            price="£18 - £22 / hour"
            buttonText="Book Now"
            iconSource={dogWalkingIcon}
            onPress={() => onBookPress("Small Pack Walk")}
          />
        </View>

        {/* Nacho's Interactive Showcase Image */}
        <Pressable
          style={styles.imageContainer}
          onHoverIn={() => setIsNachoHovered(true)}
          onHoverOut={() => setIsNachoHovered(false)}
          onPressIn={() => setIsNachoHovered(true)} // Triggers on mobile tap
          onPressOut={() => setIsNachoHovered(false)}
        >
          <Image
            source={nachoRunning}
            style={styles.featureImage}
            resizeMode="cover"
          />

          {/* The Dark Overlay - Only shows when hovered/tapped */}
          {isNachoHovered && (
            <View style={styles.overlay}>
              <Text style={styles.overlayTitle}>Nacho</Text>
              <Text style={styles.overlayText}>Boston Terrier</Text>
              <Text style={styles.overlayText}>Age: 7</Text>
            </View>
          )}
        </Pressable>
      </View>

      <Text style={styles.sectionSubtitle}>Dog-Sitting</Text>
      <View style={styles.grid}>
        <ServiceCard
          title="Hourly Dog Sitting"
          description="Flexible, extended care in your own home. Perfect for when you need a few solid hours of coverage while you are out."
          price="£20 - £25 / hour"
          buttonText="Book Now"
          iconSource={houseIcon}
          onPress={() => onBookPress("Hourly Dog Sitting")}
        />
        <ServiceCard
          title="Quick Check-In"
          description="A 30-minute home visit to let your dog out, top up food and water bowls, and provide a quick burst of playtime."
          price="£15 - £18 / visit"
          buttonText="Book Now"
          iconSource={dogSittingIcon}
          onPress={() => onBookPress("Quick Check-In")}
        />
        <ServiceCard
          title="Overnight Dog Sitting"
          description="The ultimate stress-free alternative to kennels. We stay in your home overnight, providing dedicated pet care."
          price="£70 - £90 / night"
          buttonText="Book Now"
          iconSource={overnightIcon}
          onPress={() => onBookPress("Overnight Dog Sitting")}
        />
      </View>

      <Text style={styles.sectionSubtitle}>Free Trials</Text>
      <View style={styles.grid}>
        <ServiceCard
          title="Dog Sitting Free Trial"
          description="Inviting someone into your home requires absolute trust. Claim a complimentary meet-and-greet drop-in."
          buttonText="Enquire"
          isTrial={true}
          iconSource={dogSittingIcon}
          onPress={() => onBookPress("Free Trial Enquiry")}
        />
        <ServiceCard
          title="Join Us On A Walk Free Trial"
          description="We know handing over the leash is a big step. Experience a completely risk-free onboarding walk alongside us."
          buttonText="Enquire"
          isTrial={true}
          iconSource={dogWalkingIcon}
          onPress={() => onBookPress("Free Trial Enquiry")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: SIZES.xxLarge,
    paddingHorizontal: SIZES.xxLarge,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.primary,
  },
  sectionTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xxLarge,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.medium,
  },
  sectionSubtitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xLarge,
    fontFamily: "Georgia",
    fontWeight: "600",
    marginTop: SIZES.large,
    marginBottom: SIZES.medium,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.large,
    justifyContent: "space-between",
    marginBottom: SIZES.large,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.large,
    flex: 1,
    minWidth: 320,
  },
  /* --- NEW STYLES FOR THE HOVER EFFECT --- */
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 16,
    overflow: "hidden", // Crucial: Keeps the dark overlay inside the rounded corners!
  },
  featureImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFill, // Stretches the overlay perfectly over the image
    backgroundColor: "rgba(0, 0, 0, 0.6)", // 60% opacity black
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
