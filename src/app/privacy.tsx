import { useRouter } from "expo-router";
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

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleNavClick = (section: any) => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Restored the NavBar and passed the empty activeSection string here! */}
      <NavBar activeSection="" onNavClick={handleNavClick} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push("/")}
            >
              <Text style={styles.backButtonText}>← Back to Home</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.lastUpdated}>Last Updated: August 2026</Text>

            <Text style={styles.paragraph}>
              At Walkies & More, your privacy and the security of your personal
              information are incredibly important. This Privacy Policy explains
              how your data is collected, used, and protected when you use our
              website or contact us regarding pet care services.
            </Text>

            <Text style={styles.sectionHeader}>Information Collected</Text>
            <Text style={styles.paragraph}>
              When you fill out the contact form on our website or reach out to
              us directly, we collect the following information:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Your full name</Text>
              <Text style={styles.bulletItem}>• Your email address</Text>
              <Text style={styles.bulletItem}>
                • Information about your dog (e.g., name, breed, and specific
                behavioural or dietary needs)
              </Text>
              <Text style={styles.bulletItem}>
                • Any other details you voluntarily provide in your message
              </Text>
            </View>

            <Text style={styles.sectionHeader}>
              How Your Information is Used
            </Text>
            <Text style={styles.paragraph}>
              The information you provide is used strictly for the following
              business purposes:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • To respond to your enquiries and communicate with you about
                our services.
              </Text>
              <Text style={styles.bulletItem}>
                • To schedule and safely manage complimentary meet-and-greets or
                future pet care bookings.
              </Text>
              <Text style={styles.bulletItem}>
                • To ensure the absolute safety, enrichment, and proper routine
                management of your dog based on the details provided.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>Data Sharing and Security</Text>
            <Text style={styles.paragraph}>
              Your trust is paramount. Walkies & More will never sell, rent, or
              trade your personal information to any third parties. Your data is
              kept entirely confidential and is accessed solely by Amani Howe
              (Mani) to provide you with premium pet care services.
            </Text>

            <Text style={styles.sectionHeader}>Data Retention</Text>
            <Text style={styles.paragraph}>
              Your personal information is kept securely and only for as long as
              necessary to fulfill the purposes outlined in this policy, to
              maintain our working relationship, or as required to comply with
              standard legal obligations.
            </Text>

            <Text style={styles.sectionHeader}>Cookies and Tracking</Text>
            <Text style={styles.paragraph}>
              Our website uses essential technical cookies to function properly.
              With your explicit consent, we also use Google Analytics cookies
              to anonymously measure website traffic and improve our services.
              You can opt out of these non-essential cookies at any time via the
              banner on our homepage.
            </Text>

            <Text style={styles.sectionHeader}>Your Rights</Text>
            <Text style={styles.paragraph}>
              Under UK data protection laws, you have the right to:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Request a copy of the personal data we hold about you.
              </Text>
              <Text style={styles.bulletItem}>
                • Request that any incorrect or outdated information be updated.
              </Text>
              <Text style={styles.bulletItem}>
                • Request the complete deletion of your personal data from our
                records at any time.
              </Text>
            </View>

            <Text style={styles.sectionHeader}>Contact Us</Text>
            <Text style={styles.paragraph}>
              If you have any questions about this Privacy Policy, how your data
              is handled, or if you would like to exercise any of your data
              right, please get in touch:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Mobile: 07927 383427</Text>
              <Text style={styles.bulletItem}>
                • Email: contact.walkiesandmore@gmail.com
              </Text>
              <Text style={styles.bulletItem}>
                • Location: Marlborough, Wiltshire
              </Text>
            </View>
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
