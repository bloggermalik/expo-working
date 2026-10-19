import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { authClient } from '@/lib/auth-client';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setError('');
    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);
    if (error) setError(error.message ?? 'Sign up failed');
  };

  return (
    <View className="flex-1 justify-center gap-3 bg-background p-4">
      <Text className="mb-2 text-2xl font-bold text-foreground">Sign up</Text>

      <TextInput
        className="rounded-lg border border-border p-3 text-foreground"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
        onPress={handleSignUp}
        disabled={loading}
        className="items-center rounded-lg bg-primary p-4 disabled:opacity-50">
        <Text className="font-semibold text-primary-foreground">
          {loading ? 'Creating account...' : 'Sign up'}
        </Text>
      </Pressable>

      <Link href="/login" asChild>
        <Pressable className="items-center p-2">
          <Text className="text-foreground">Already have an account? Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}