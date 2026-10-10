
import { Link } from 'expo-router';
import { View, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';

export default function Login() {
  return (
    <View className="flex-1 justify-center bg-background p-4">
      <Text className="mb-2 text-2xl font-bold text-foreground">
        Login
      </Text>
      <Text className="mb-4 text-foreground">
        Login Successful?
      </Text>

      <Link href="/(app)/(tabs)" asChild>
        <Pressable className="items-center rounded-lg bg-primary p-4">
          <Text className="font-semibold text-primary-foreground">
            Go to Home
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
