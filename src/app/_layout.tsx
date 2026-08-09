import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  // This state tracks if the website has actually loaded in the browser yet
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If it is still building on the server, show nothing so it doesn't guess the wrong screen size!
  if (!isMounted) return null;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
