import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { authClient } from '@/lib/auth-client';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);
    if (error) setError(error.message ?? 'Sign in failed');
    // On success the session updates and Stack.Protected routes to (app)
  };

  const handleGoogle = async () => {
    setError('');
    const { error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/', // converted to a deep link by the Expo plugin
    });
    if (error) setError(error.message ?? 'Google sign in failed');
  };

  return (
    <View className="flex-1 justify-center gap-3 bg-background p-4">
      <Text className="mb-2 text-2xl font-bold text-foreground">Login</Text>

      <TextInput
        className="rounded-lg border border-border p-3 text-foreground"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="rounded-lg border border-border p-3 text-foreground"
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      {!!error && <Text className="text-destructive">{error}</Text>}

      <Pressable
        onPress={handleLogin}
        disabled={loading}
        className="items-center rounded-lg bg-primary p-4 disabled:opacity-50">
        <Text className="font-semibold text-primary-foreground">
          {loading ? 'Signing in...' : 'Sign in'}
        </Text>
      </Pressable>

      <Pressable onPress={handleGoogle} className="items-center rounded-lg border border-border p-4">
        <Text className="text-foreground">Continue with Google</Text>
      </Pressable>

      <Link href="/sign-up" asChild>
        <Pressable className="items-center p-2">
          <Text className="text-foreground">No account? Sign up</Text>
        </Pressable>
      </Link>
    </View>
  );
}