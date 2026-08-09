import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOURS, SIZES } from "../styles/theme";

const emailIcon = require("../assets/Email_Icon.png");
const locationIcon = require("../assets/Location_Icon.png");
const mobileIcon = require("../assets/Mobile_Icon.png");
const dropdownIcon = require("../assets/Dropdown_Icon.png");

interface ContactSectionProps {
  selectedService?: string;
}

export default function ContactSection({
  selectedService,
}: ContactSectionProps) {
  // Form State
  const [name, setName] = useState("");
  const [dogDetails, setDogDetails] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");

  // Dropdown State
  const [service, setService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const servicesList = [
    "Founding Client Offer (25% Off)",
    "Free Trial Enquiry",
    "Premium Solo Walk",
    "Small Pack Walk",
    "Hourly Dog Sitting",
    "Quick Check-In",
    "Overnight Dog Sitting",
    "Other / General Question",
  ];

  // Sync external selected service prop to local dropdown state
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  // The Submission Function
  const handleSubmit = async () => {
    if (!name || !email || !service) {
      alert("Please fill in your Name, Email, and select a Service.");
      return;
    }

    const formData = {
      name,
      dogDetails,
      email,
      phone,
      postcode,
      service,
      message,
    };

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwTQT0ZDevVZ5sv2-jtzeN9bQeSYY85PrMKaZxr22j86ku4L_eAMAh_qjQe1c0aCyJe/exec";

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully! I will be in touch soon.");
        // Clear the form after a successful send
        setName("");
        setDogDetails("");
        setEmail("");
        setPhone("");
        setPostcode("");
        setService("");
        setMessage("");
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Contact | Get In Touch</Text>

      <View style={styles.container}>
        {/* Left Column: Contact Info & Reassurance */}
        <View style={styles.infoColumn}>
          <Text style={styles.header}>Ready to book your free trial?</Text>
          <Text style={styles.paragraph}>
            Whether you need a reliable daily walker, or you just have a few
            questions about how our structured routines work, I would love to
            hear from you.
          </Text>
          <Text style={styles.paragraph}>
            Fill out the form with your details and a little bit about your dog,
            and I will get back to you within 24 hours to schedule a
            complimentary meet-and-greet.
          </Text>

          <View style={styles.contactDetails}>
            <View style={styles.contactRow}>
              <Image
                source={locationIcon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.contactDetailText}>
                Marlborough, Wiltshire
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Image
                source={emailIcon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.contactDetailText}>
                contact.walkiesandmore@gmail.com
              </Text>
            </View>
            <View style={styles.contactRow}>
              <Image
                source={mobileIcon}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.contactDetailText}>07927 383427</Text>
            </View>
          </View>
        </View>

        {/* Right Column: The Form UI */}
        <View style={styles.formColumn}>
          <TextInput
            style={styles.input}
            placeholder="Your Name *"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Dog's Name & Breed"
            placeholderTextColor="#888"
            value={dogDetails}
            onChangeText={setDogDetails}
          />

          <View style={styles.rowInputs}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Email Address *"
              keyboardType="email-address"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor="#888"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Postcode / General Area"
            placeholderTextColor="#888"
            value={postcode}
            onChangeText={setPostcode}
          />

          {/* Custom Dropdown */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Text
                style={
                  service
                    ? styles.dropdownTextActive
                    : styles.dropdownTextPlaceholder
                }
              >
                {service ? service : "Select a Service *"}
              </Text>
              <Image
                source={dropdownIcon}
                style={[
                  styles.dropdownArrowIcon,
                  isDropdownOpen && { transform: [{ rotate: "180deg" }] }, // Flips it upside down when open!
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {isDropdownOpen && (
              <View style={styles.dropdownList}>
                {servicesList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setService(item);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="How can we help? (Tell us a little bit about your dog!)"
            placeholderTextColor="#888"
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: SIZES.xxLarge,
    paddingHorizontal: SIZES.xxLarge,
  },
  sectionTitle: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.xxLarge,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: SIZES.large,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: SIZES.xxLarge,
    shadowColor: COLOURS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    gap: SIZES.xxLarge,
  },
  infoColumn: {
    flex: 1,
    minWidth: 280,
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
  contactDetails: {
    marginTop: SIZES.large,
    paddingTop: SIZES.large,
    borderTopWidth: 1,
    borderTopColor: COLOURS.background,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.small,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  contactDetailText: {
    color: COLOURS.primaryDark,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  formColumn: {
    flex: 1,
    minWidth: 280,
  },
  rowInputs: {
    flexDirection: "row",
    gap: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  halfInput: {
    flex: 1,
    marginBottom: 0,
  },
  input: {
    backgroundColor: COLOURS.background,
    borderRadius: 8,
    padding: SIZES.medium,
    fontSize: SIZES.medium,
    color: COLOURS.text,
    marginBottom: SIZES.medium,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  textArea: {
    minHeight: 120,
  },
  /* --- DROPDOWN STYLES --- */
  dropdownContainer: {
    marginBottom: SIZES.medium,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLOURS.background,
    borderRadius: 8,
    padding: SIZES.medium,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  dropdownTextPlaceholder: {
    color: "#888",
    fontSize: SIZES.medium,
  },
  dropdownTextActive: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
  dropdownArrowIcon: {
    width: 16,
    height: 16,
    tintColor: COLOURS.primaryDark, // Optional: If your icon is black, this will tint it to match your purple branding!
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eaeaea",
    borderRadius: 8,
    marginTop: 4,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.background,
  },
  dropdownItemText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
  submitButton: {
    backgroundColor: COLOURS.accent,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: SIZES.small,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
});
