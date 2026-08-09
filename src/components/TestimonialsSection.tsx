import { useEffect, useRef, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
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

  // 1. Creates a direct reference to the ScrollView to control it via script
  const scrollViewRef = useRef<ScrollView>(null);

  // 2. Calculates dimensions. The card is now 900px wide on desktop!
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(width - SIZES.xxLarge * 2, 900);
  const cardGap = SIZES.large;

  // 3. The Auto-Scroll Script
  useEffect(() => {
    // Sets a timer to run every 5000 milliseconds (5 seconds)
    const timer = setInterval(() => {
      const nextIndex =
        activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
      handleScroll(nextIndex);
    }, 5000);

    // Clears the timer if the user manually clicks a dot, resetting the clock
    return () => clearInterval(timer);
  }, [activeIndex]);

  // 4. The Sliding Transition Script
  const handleScroll = (index: number) => {
    setActiveIndex(index);
    // Calculates the exact pixel coordinate to slide to
    const slideDistance = index * (cardWidth + cardGap);

    scrollViewRef.current?.scrollTo({
      x: slideDistance,
      animated: true, // This boolean triggers the smooth sliding animation
    });
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Testimonials | Happy Pet Parents</Text>

      <View style={styles.carouselContainer}>
        {/* We use a hidden ScrollView as the "track" for our sliding animation */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false} // Prevents manual dragging so the script stays in full control
          contentContainerStyle={{ gap: cardGap, paddingBottom: SIZES.large }}
          style={{ width: cardWidth }} // Masks the scroll view so you only see one card at a time
        >
          {TESTIMONIALS.map((item) => (
            <View key={item.id} style={[styles.card, { width: cardWidth }]}>
              <View style={styles.imageColumn}>
                <View style={styles.imagePlaceholder}>
                  <Text style={styles.placeholderText}>Photo</Text>
                </View>
              </View>

              <View style={styles.textColumn}>
                <Text style={styles.clientName}>{item.name}</Text>
                <Text style={styles.testimonialText}>"{item.text}"</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* The Pagination Dots */}
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
    alignItems: "center", // Centers the entire carousel and dots
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.xxLarge, // Increased padding for the bigger card
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
    width: 100, // Increased image size
    height: 100, // Increased image size
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
    fontSize: SIZES.medium, // Increased text size
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
});
