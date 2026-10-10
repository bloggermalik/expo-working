
import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import {
  UserRound,
  Mail,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="p-4 pb-8"
    >
      <View className="mb-6 gap-1">
        <Text className="text-3xl font-bold text-foreground">
          Profile
        </Text>

        <Text className="text-muted-foreground">
          Manage your personal information.
        </Text>
      </View>

      <View className="mb-6 items-center rounded-2xl border border-border bg-card p-6">
        <View className="mb-4 h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Icon
            as={UserRound}
            className="text-primary"
            size={38}
          />
        </View>

        <Text className="text-xl font-bold text-foreground">
          Your Name
        </Text>

        <Text className="mt-1 text-muted-foreground">
          you@example.com
        </Text>
      </View>

      <View className="rounded-2xl border border-border bg-card p-2">
        <Pressable
          onPress={() => {}}
          className="flex-row items-center gap-3 rounded-xl p-4"
        >
          <Icon
            as={UserRound}
            className="text-muted-foreground"
            size={22}
          />

          <Text className="flex-1 font-medium text-foreground">
            Personal information
          </Text>

          <Icon
            as={ChevronRight}
            className="text-muted-foreground"
            size={20}
          />
        </Pressable>

        <Pressable
          onPress={() => {}}
          className="flex-row items-center gap-3 rounded-xl p-4"
        >
          <Icon
            as={Mail}
            className="text-muted-foreground"
            size={22}
          />

          <Text className="flex-1 font-medium text-foreground">
            Email address
          </Text>

          <Icon
            as={ChevronRight}
            className="text-muted-foreground"
            size={20}
          />
        </Pressable>

        <Pressable
          onPress={() => {}}
          className="flex-row items-center gap-3 rounded-xl p-4"
        >
          <Icon
            as={ShieldCheck}
            className="text-muted-foreground"
            size={22}
          />

          <Text className="flex-1 font-medium text-foreground">
            Security
          </Text>

          <Icon
            as={ChevronRight}
            className="text-muted-foreground"
            size={20}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}
