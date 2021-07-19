import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "./src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51JBp6BFdjGfYcejFEt3mjBAIJKsaYio3ADiLrKcPF8Tqwoz8sJ2FxSdvqkijkMABI7DwNWjtvCJy2D7KjZAIkS0d00ZqwvCfb7">
      <StripeApp />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
