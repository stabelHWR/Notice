import { Stack } from 'expo-router';
import React from 'react';

export default function WelcomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="progress" options={{ headerShown: false }} />
      <Stack.Screen name="practice" options={{ headerShown: false }} />
    </Stack>
  );
}
