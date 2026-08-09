import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const logoImage = require("../assets/WalkiesAndMore_Logo.png");

export default function AboutUsSection() {
  const { width } = useWindowDimensions();
  const isMobile = width < 850;

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <Text
        style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}
      >
        About Us
      </Text>

      {/* Card 1: The Business */}
      <View style={[styles.card, isMobile && styles.cardMobile]}>
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

        {/* This image jumps perfectly underneath the text on mobile */}
        <View
          style={[
            styles.imageColumnRight,
            isMobile && styles.imageColumnMobile,
          ]}
        >
          <Image
            source={logoImage}
            style={styles.businessLogo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Card 2: Meet Mani */}
      <View
        style={[styles.card, styles.reverseCard, isMobile && styles.cardMobile]}
      >
        {/* On mobile, this flips to stack cleanly rather than using row-reverse */}
        <View
          style={[styles.imageColumnLeft, isMobile && styles.imageColumnMobile]}
        >
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
    marginBottom: SIZES.large,
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    alignItems: "center",
  },
  reverseCard: {
    flexDirection: "row-reverse",
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
    opacity: 0.8,
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
  /* --- NEW MOBILE STYLES --- */
  sectionMobile: {
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.xLarge,
  },
  sectionTitleMobile: {
    textAlign: "center",
  },
  cardMobile: {
    flexDirection: "column", // Overrides both "row" AND "row-reverse"!
    padding: SIZES.large,
  },
  imageColumnMobile: {
    width: "100%", // Resets all the desktop padding and margins
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    marginTop: SIZES.large,
    marginBottom: SIZES.large,
  },
});
