import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { authClient } from '@/lib/auth-client';
import { ThemeProvider } from 'expo-router/react-navigation';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { NavigationBar } from 'expo-navigation-bar';
export { ErrorBoundary } from 'expo-router';


// Must be called at the top level, before the first render
SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending) {
      SplashScreen.hideAsync();
    }
  }, [isPending]);

  if (isPending) return null; // the splash screen stays visible meanwhile

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <NavigationBar style="light" />
      <RootNavigator />
      <PortalHost />
    </ThemeProvider>
  );
}