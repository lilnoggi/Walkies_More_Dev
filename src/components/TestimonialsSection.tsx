import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions, // 1. Hook imported
  View,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah & Buster",
    text: "Mani is absolutely incredible! Buster is usually very anxious around new people, but Mani knew exactly how to handle his quirks. The peace of mind I get while at work is priceless.",
  },
  {
    id: "2",
    name: "James & Bella",
    text: "The most reliable dog walker we've ever used. The attention to detail, especially with Bella's strict dietary needs, is completely unmatched. Cannot recommend Walkies & More enough!",
  },
  {
    id: "3",
    name: "Emma & Duke",
    text: "I was so nervous about handing over the keys to my house, but Mani's professionalism put me at ease immediately. Duke waits by the door every Tuesday for his pack walk!",
  },
  {
    id: "4",
    name: "Rob & Milo",
    text: "Mani helped completely transition Milo off of his stubborn hand-feeding habits with a brilliant, structured routine. An absolute lifesaver for our family.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  // 2. Measure screen and determine mobile state
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  // 3. Adjust card width for mobile so it fits the screen properly
  const paddingOffset = isMobile ? SIZES.large * 2 : SIZES.xxLarge * 2;
  const cardWidth = Math.min(width - paddingOffset, 900);
  const cardGap = SIZES.large;

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex =
        activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
      handleScroll(nextIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleScroll = (index: number) => {
    setActiveIndex(index);
    const slideDistance = index * (cardWidth + cardGap);
    scrollViewRef.current?.scrollTo({
      x: slideDistance,
      animated: true,
    });
  };

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <Text
        style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}
      >
        Testimonials | Happy Pet Parents
      </Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={{ gap: cardGap, paddingBottom: SIZES.large }}
          style={{ width: cardWidth }}
        >
          {TESTIMONIALS.map((item) => (
            // 4. Apply mobile card styling
            <View
              key={item.id}
              style={[
                styles.card,
                isMobile && styles.cardMobile,
                { width: cardWidth },
              ]}
            >
              <View
                style={[
                  styles.imageColumn,
                  isMobile && styles.imageColumnMobile,
                ]}
              >
                <View
                  style={[
                    styles.imagePlaceholder,
                    isMobile && styles.imagePlaceholderMobile,
                  ]}
                >
                  <Text style={styles.placeholderText}>Photo</Text>
                </View>
              </View>

              <View style={styles.textColumn}>
                <Text
                  style={[
                    styles.clientName,
                    isMobile && styles.clientNameMobile,
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.testimonialText,
                    isMobile && styles.testimonialTextMobile,
                  ]}
                >
                  "{item.text}"
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.paginationContainer}>
          {TESTIMONIALS.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleScroll(index)}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: SIZES.xxLarge,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.primary,
  },
  sectionTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xxLarge,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.large,
    paddingHorizontal: SIZES.xxLarge,
  },
  carouselContainer: {
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.xxLarge,
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    alignItems: "center",
  },
  imageColumn: {
    marginRight: SIZES.xLarge,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLOURS.background,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLOURS.primary,
  },
  placeholderText: {
    color: COLOURS.primary,
    fontSize: SIZES.small,
    fontWeight: "bold",
  },
  textColumn: {
    flex: 1,
  },
  clientName: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: SIZES.small,
  },
  testimonialText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    lineHeight: 24,
    fontStyle: "italic",
  },
  paginationContainer: {
    flexDirection: "row",
    marginTop: SIZES.small,
    gap: 12,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: COLOURS.primary,
  },
  activeDot: {
    backgroundColor: COLOURS.primary,
  },
  inactiveDot: {
    backgroundColor: "transparent",
  },
  /* --- NEW MOBILE STYLES --- */
  sectionMobile: {
    paddingVertical: SIZES.xLarge,
  },
  sectionTitleMobile: {
    textAlign: "center",
    paddingHorizontal: SIZES.large,
  },
  cardMobile: {
    flexDirection: "column", // Stacks the image on top of the text
    padding: SIZES.large, // Reduces the massive padding
    alignItems: "center",
    justifyContent: "center",
  },
  imageColumnMobile: {
    marginRight: 0, // Removes the desktop gap
    marginBottom: SIZES.large,
  },
  imagePlaceholderMobile: {
    width: 80, // Shrinks the image slightly for mobile
    height: 80,
  },
  clientNameMobile: {
    textAlign: "center",
  },
  testimonialTextMobile: {
    textAlign: "center",
    fontSize: SIZES.small, // Shrinks text slightly to prevent huge walls of text on a phone
    lineHeight: 22,
  },
});
