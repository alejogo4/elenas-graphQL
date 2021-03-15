import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/utils/graphQL";
import { ClientProvider } from "./src/context/client.context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ClientProvider>
          <ApolloProvider client={client}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ApolloProvider>
        </ClientProvider>
      </SafeAreaProvider>
    );
  }
}
