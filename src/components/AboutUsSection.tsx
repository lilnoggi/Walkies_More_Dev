import { Image, StyleSheet, Text, View } from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

// Assuming you named it this to fix the web bug earlier!
const logoImage = require("../assets/WalkiesAndMore_Logo.png");

export default function AboutUsSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About Us</Text>

      {/* Card 1: The Business */}
      <View style={styles.card}>
        <View style={styles.textColumn}>
          <Text style={styles.header}>The Walkies & More Standard</Text>
          <Text style={styles.paragraph}>
            Walkies & More was founded to provide a premium, stress-free
            alternative to standard pet care. We understand that handing over
            the leash, and the keys to your home, requires absolute trust.
          </Text>
          <Text style={styles.paragraph}>
            Our services are built entirely around reliability and tailored
            enrichment. We don't just walk dogs; we implement structured
            routines. Whether that means managing a strict behavioral feeding
            adjustment plan to correct hand-feeding habits, or providing a
            quiet, sensory-focused solo walk for a nervous senior dog, your
            peace of mind is our profession.
          </Text>
          <Text style={styles.header}>What Is Your Logo?</Text>
          <Text style={styles.paragraph}>
            Our logo is actually my dog Nacho!
          </Text>
        </View>

        <View style={styles.imageColumnRight}>
          <Image
            source={logoImage}
            style={styles.businessLogo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Card 2: Meet Mani (Reversed Layout for ZigZag effect) */}
      <View style={[styles.card, styles.reverseCard]}>
        <View style={styles.imageColumnLeft}>
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: COLOURS.primary, fontWeight: "bold" }}>
              Mani's Photo
            </Text>
          </View>
        </View>

        <View style={styles.textColumn}>
          <Text style={styles.header}>Meet Your Pet Care Professional</Text>

          <Text style={styles.paragraph}>
            Hi, I'm Mani! I live right here in Marlborough with my two Boston
            Terriers, Nacho and Salsa.
          </Text>

          <Text style={styles.paragraph}>
            My professional background is actually in high-volume customer
            service, having spent years leading teams as an Assistant Manager at
            Caffe Nero and a Team Leader at Cineworld. While I also spend a lot
            of my time writing C# and developing software for my games
            programming degree, my ultimate passion is dog care.
          </Text>

          <Text style={styles.paragraph}>
            I know firsthand how much meticulous detail goes into tailoring
            routines for pets, like coordinating strict plate-removal time
            limits and introducing interactive treat toys for my girlfriend's
            stubborn Shih Tzu, Milo. I bring that exact same level of dedicated,
            highly organised management to every pet I care for.
          </Text>
        </View>
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
    marginBottom: SIZES.large,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.xxLarge,
    marginBottom: SIZES.large, // Space between the two cards
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    alignItems: "center",
  },
  reverseCard: {
    flexDirection: "row-reverse", // Flips the image to the left side
  },
  textColumn: {
    flex: 1,
  },
  imageColumnRight: {
    width: 200,
    marginLeft: SIZES.xxLarge,
    justifyContent: "center",
    alignItems: "center",
  },
  imageColumnLeft: {
    width: 250,
    marginRight: SIZES.xxLarge,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
  },
  businessLogo: {
    width: 180,
    height: 180,
    opacity: 0.8, // Softens the logo slightly so it isn't overpowering
  },
  imagePlaceholder: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: COLOURS.background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: COLOURS.primary,
  },
  header: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    marginBottom: SIZES.medium,
  },
  paragraph: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 24,
    marginBottom: SIZES.medium,
  },
});
