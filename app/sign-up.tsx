import { Link } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@/components/ui/button';
import Svg, { Path } from 'react-native-svg';

import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { authClient } from '@/lib/auth-client';

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </Svg>
  );
}

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
    // On success the session updates and Stack.Protected routes to (app)
  };

  const handleGoogle = async () => {
    setError('');
    const { error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
    if (error) setError(error.message ?? 'Google sign up failed');
  };

  return (
    <View className="flex-1 justify-center gap-6 bg-background px-6">
      <View className="gap-1">
        <Text className="text-3xl font-bold text-foreground">Create account</Text>
        <Text className="text-muted-foreground">Start your 30-day free trial</Text>
      </View>

      <Button variant="outline" className="h-12 flex-row gap-3" onPress={handleGoogle}>
        <GoogleLogo />
        <Text>Continue with Google</Text>
      </Button>

      <View className="flex-row items-center gap-3">
        <View className="h-px flex-1 bg-border" />
        <Text className="text-xs text-muted-foreground">OR</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      <View className="gap-3">
        <Input className="h-12" placeholder="Name" value={name} onChangeText={setName} />
        <Input
          className="h-12"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          className="h-12"
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        {!!error && <Text className="text-sm text-destructive">{error}</Text>}
      </View>

      <Button className="h-12" onPress={handleSignUp} disabled={loading}>
        <Text>{loading ? 'Creating account...' : 'Sign up'}</Text>
      </Button>

      <View className="flex-row items-center justify-center">
        <Text className="text-muted-foreground">Already have an account?</Text>
        <Link href="/login" asChild>
          <Button variant="link" className="px-1">
            <Text>Login</Text>
          </Button>
        </Link>
      </View>
    </View>
  );
}