import { useRouter } from "expo-router"; // This handles our navigation!
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOURS, SIZES } from "../styles/theme";

import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export default function TermsOfService() {
  const router = useRouter(); // Initialize the router

  const handleNavClick = (section: string) => {
    // If they click a NavBar link while on this page, we send them back to home first!
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar onNavClick={handleNavClick} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.textContainer}>
            {/* The Back Button */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push("/")}
            >
              <Text style={styles.backButtonText}>← Back to Home</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Terms of Service</Text>
            <Text style={styles.lastUpdated}>Last Updated: August 2026</Text>

            <Text style={styles.paragraph}>
              Welcome to Walkies & More! By booking our services, you agree to
              the following terms and conditions, designed to ensure the
              absolute safety and well-being of your pets.
            </Text>

            <Text style={styles.sectionHeader}>Booking and Cancellations</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Scheduling: All walks and drop-ins must be booked in advance.
              </Text>
              <Text style={styles.bulletItem}>
                • Cancellations: We require a minimum of 24 hours' notice for
                cancellations. Services cancelled with less than 24 hours'
                notice will be charged at the full rate.
              </Text>
              <Text style={styles.bulletItem}>
                • Extreme Weather: In the event of extreme weather (e.g., severe
                heat, thunderstorms, or ice), walks may be shortened or
                substituted with indoor enrichment and potty breaks for the
                safety of the dogs.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>
              Health, Safety, and Emergencies
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Vaccinations & Preventions: All dogs must be up-to-date on
                their standard vaccinations, as well as flea, tick, and worming
                treatments.
              </Text>
              <Text style={styles.bulletItem}>
                • Veterinary Release: In the event of a medical emergency where
                the owner cannot be reached, Walkies & More is authorised to
                seek immediate veterinary care. The owner assumes full
                responsibility for any resulting veterinary bills.
              </Text>
              <Text style={styles.bulletItem}>
                • Behaviour: Owners must disclose any history of aggression,
                anxiety, or specific behavioural triggers. Walkies & More
                reserves the right to refuse or terminate services if a dog
                poses a danger to the walker, other animals, or the public.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>
              Home Access and Key Holding
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • If services require access to your home while you are away,
                keys will be kept in the secure, locked location agreed upon
                when not in use.
              </Text>
              <Text style={styles.bulletItem}>
                • Keys will never be labeled with your address or full name.
              </Text>
              <Text style={styles.bulletItem}>
                • Walkies & More is fully insured for key holding and public
                liability.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>Payments</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Invoices are issued [Weekly/Monthly/Upon Booking].
              </Text>
              <Text style={styles.bulletItem}>
                • Payments must be made via bank transfer within seven (7) days
                of the invoice date. Late payments may result in a late payment
                fee or suspension of future services.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>Liability</Text>
            <Text style={styles.paragraph}>
              Walkies & More takes the utmost care in providing premium, highly
              organised management for every pet. However, we cannot be liable
              for any loss, injury, or death of a pet unless it is proven to be
              the direct result of negligence on our part. Owners remain
              strictly liable for any damage or injury caused by their dog to
              property, people, or other animals.
            </Text>
          </View>
        </View>

        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: COLOURS.background,
  },
  scrollContent: {
    alignItems: "center",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 1000,
    paddingVertical: SIZES.xxLarge,
    paddingHorizontal: SIZES.large,
  },
  textContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.xxLarge,
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: SIZES.large,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLOURS.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOURS.primary,
  },
  backButtonText: {
    color: COLOURS.primaryDark,
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  title: {
    color: COLOURS.primaryDark,
    fontSize: 40,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  lastUpdated: {
    color: "#888",
    fontSize: SIZES.medium,
    fontStyle: "italic",
    marginBottom: SIZES.xLarge,
  },
  sectionHeader: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    marginTop: SIZES.large,
    marginBottom: SIZES.medium,
  },
  paragraph: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 28,
    marginBottom: SIZES.medium,
  },
  bulletList: {
    marginBottom: SIZES.medium,
    paddingLeft: SIZES.medium,
  },
  bulletItem: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 28,
    marginBottom: 8,
  },
});
