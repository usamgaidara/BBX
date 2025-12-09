import { Stack } from 'expo-router';
import React from 'react';

export default function MessagesLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Messages',
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            title: 'Chat',
          }}
        />
      </Stack>
    </>
  );
}
