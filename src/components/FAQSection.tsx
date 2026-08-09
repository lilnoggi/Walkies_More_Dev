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

const plusIcon = require("../assets/Plus_Icon.png");
const minusIcon = require("../assets/Minus_Icon.png");

const faqData = [
  {
    question: "What is your cancellation policy?",
    answer:
      "We require a minimum of 24 hours' notice for any cancellations. Services cancelled with less than 24 hours' notice will be charged at the full rate to ensure our scheduling remains reliable for all clients.",
  },
  { question: "Are you insured?", answer: "We're working on it!" },
  {
    question: "How does your pricing work?",
    answer:
      "Our prices are provided as a range to account for the unique needs of every dog. The final rate is determined during our complimentary meet-and-greet and depends on factors such as specific behavioral requirements, medical needs, travel distance, and whether the booking falls on a weekend or bank holiday.",
  },
  {
    question: "How do you handle house keys?",
    answer:
      "If services require access to your home while you are away, your keys will be kept in a secure, locked location when not in use. For absolute security, keys are never labeled with your address or full name.",
  },
  {
    question: "Are there any health requirements for my dog?",
    answer:
      "Yes, the safety of the pack is our top priority! All dogs must be completely up-to-date on their standard vaccinations, as well as routine flea, tick, and worming treatments.",
  },
  {
    question: "What happens in extreme weather conditions?",
    answer:
      "Your dog's safety always comes first. In the event of severe heat, thunderstorms, or dangerous ice, scheduled walks may be shortened or substituted with dedicated indoor enrichment and quick potty breaks.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <Text
        style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}
      >
        Frequently Asked Questions
      </Text>

      <View
        style={[styles.faqContainer, isMobile && styles.faqContainerMobile]}
      >
        {faqData.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                style={styles.faqHeader}
                onPress={() => toggleFAQ(index)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.questionText,
                    isMobile && styles.questionTextMobile,
                    isOpen && { color: COLOURS.accent },
                  ]}
                >
                  {faq.question}
                </Text>
                <Image
                  source={isOpen ? minusIcon : plusIcon}
                  style={[styles.icon, isOpen && { tintColor: COLOURS.accent }]}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              {isOpen && (
                <View
                  style={[
                    styles.answerContainer,
                    isMobile && styles.answerContainerMobile,
                  ]}
                >
                  <Text style={styles.answerText}>{faq.answer}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: SIZES.xxLarge,
    paddingHorizontal: SIZES.xxLarge,
    borderTopWidth: 1,
    borderTopColor: COLOURS.primary,
    alignItems: "center",
  },
  sectionTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xxLarge,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.xxLarge,
    textAlign: "center",
  },
  faqContainer: {
    width: "100%",
    maxWidth: 1000,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.large,
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.background,
    paddingVertical: SIZES.medium,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.small,
  },
  questionText: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontWeight: "bold",
    flex: 1,
    paddingRight: SIZES.medium,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLOURS.primaryDark,
  },
  answerContainer: {
    paddingTop: SIZES.small,
    paddingBottom: SIZES.medium,
    paddingRight: SIZES.xxLarge,
  },
  answerText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 24,
  },
  /* --- NEW MOBILE STYLES --- */
  sectionMobile: {
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.xLarge,
  },
  sectionTitleMobile: {
    marginBottom: SIZES.large,
  },
  faqContainerMobile: {
    padding: SIZES.medium, // Shrinks the inner white box padding to maximize text space
  },
  questionTextMobile: {
    fontSize: SIZES.medium, // Keeps questions from dominating the small screen
  },
  answerContainerMobile: {
    paddingRight: 0, // Uses all available width for the answer paragraph
  },
});
