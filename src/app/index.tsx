import { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOURS, SIZES } from "../styles/theme";

// Custom Components
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ContactSection from "@/components/ContactSection";
import CookieBanner from "@/components/CookieBanner";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutUsSection from "../components/AboutUsSection";
import NavBar from "../components/NavBar";
import ServicesSection from "../components/ServicesSection";
import WelcomeBanner from "../components/WelcomeBanner";

export default function Home() {
  const mainScrollRef = useRef<ScrollView>(null);

  // State to track the currently active section for the NavBar highlighting
  const [activeSection, setActiveSection] = useState<string>("welcome");

  const [selectedService, setSelectedService] = useState<string>("");

  const [sectionPositions, setSectionPositions] = useState({
    welcome: 0,
    services: 0,
    about: 0,
    testimonials: 0,
    faq: 0, // Added FAQ here!
    contact: 0,
  });

  const scrollToSection = (sectionName: keyof typeof sectionPositions) => {
    const yPosition = sectionPositions[sectionName];
    if (yPosition > 0 || sectionName === "welcome") {
      mainScrollRef.current?.scrollTo({ y: yPosition, animated: true });
    }
  };

  // This function constantly fires as the user scrolls to detect which section they are looking at
  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const offset = 400; // Adds a buffer so the highlight changes right as the section comes into view

    if (
      sectionPositions.contact > 0 &&
      scrollY >= sectionPositions.contact - offset
    ) {
      setActiveSection("contact");
    } else if (
      sectionPositions.faq > 0 &&
      scrollY >= sectionPositions.faq - offset
    ) {
      setActiveSection("faq");
    } else if (
      sectionPositions.testimonials > 0 &&
      scrollY >= sectionPositions.testimonials - offset
    ) {
      setActiveSection("testimonials");
    } else if (
      sectionPositions.about > 0 &&
      scrollY >= sectionPositions.about - offset
    ) {
      setActiveSection("about");
    } else if (
      sectionPositions.services > 0 &&
      scrollY >= sectionPositions.services - offset
    ) {
      setActiveSection("services");
    } else {
      setActiveSection("welcome");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AnnouncementBanner
        onPress={() => {
          setSelectedService("Founding Client Offer (25% Off)");
          scrollToSection("contact");
        }}
      />
      <NavBar activeSection={activeSection} onNavClick={scrollToSection} />

      <ScrollView
        ref={mainScrollRef}
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll} // Attached our new listener here!
        scrollEventThrottle={16} // Makes the scroll tracking incredibly smooth
      >
        <View style={styles.contentWrapper}>
          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                welcome: event.nativeEvent.layout.y,
              }))
            }
          >
            <WelcomeBanner
              onClaimPress={() => {
                setSelectedService("Free Trial Enquiry");
                scrollToSection("contact");
              }}
            />
          </View>

          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                services: event.nativeEvent.layout.y,
              }))
            }
          >
            <ServicesSection
              onBookPress={(serviceName) => {
                setSelectedService(serviceName);
                scrollToSection("contact");
              }}
            />
          </View>

          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                about: event.nativeEvent.layout.y,
              }))
            }
          >
            <AboutUsSection />
          </View>

          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                testimonials: event.nativeEvent.layout.y,
              }))
            }
          >
            <TestimonialsSection />
          </View>

          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                contact: event.nativeEvent.layout.y,
              }))
            }
          >
            <ContactSection selectedService={selectedService} />
          </View>

          {/* Separated the FAQ into its own tracked view! */}
          <View
            onLayout={(event) =>
              setSectionPositions((prev) => ({
                ...prev,
                faq: event.nativeEvent.layout.y,
              }))
            }
          >
            <FAQSection />
          </View>
        </View>

        <FooterSection />
      </ScrollView>

      <CookieBanner />
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
    paddingBottom: SIZES.xxLarge,
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 1200,
  },
});
