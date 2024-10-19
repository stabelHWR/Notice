import { Stack } from 'expo-router';
import React from 'react';

export default function WelcomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="beginnerQuiz" options={{ headerShown: false }} />
    </Stack>
  );
}
