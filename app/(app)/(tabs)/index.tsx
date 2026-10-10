
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import {
  Users,
  ChartNoAxesCombined,
  Bell,
} from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="p-4 pb-8"
    >
      <View className="mb-6 gap-1">
        <Text className="text-3xl font-bold text-foreground">
          Dashboard
        </Text>

        <Text className="text-muted-foreground">
          Welcome back!
        </Text>
      </View>

      <View className="mb-4 rounded-2xl border border-border bg-card p-5">
        <View className="mb-3 h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon
            as={Users}
            className="text-primary"
            size={24}
          />
        </View>

        <Text className="text-lg font-semibold text-foreground">
          Customers
        </Text>

        <Text className="mt-1 text-sm text-muted-foreground">
          Manage your customers and their information.
        </Text>
      </View>

      <View className="mb-4 rounded-2xl border border-border bg-card p-5">
        <View className="mb-3 h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon
            as={ChartNoAxesCombined}
            className="text-primary"
            size={24}
          />
        </View>

        <Text className="text-lg font-semibold text-foreground">
          Activity
        </Text>

        <Text className="mt-1 text-sm text-muted-foreground">
          Keep track of your recent activity.
        </Text>
      </View>

      <View className="rounded-2xl border border-border bg-card p-5">
        <View className="mb-3 h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon
            as={Bell}
            className="text-primary"
            size={24}
          />
        </View>

        <Text className="text-lg font-semibold text-foreground">
          Notifications
        </Text>

        <Text className="mt-1 text-sm text-muted-foreground">
          Stay informed about important updates.
        </Text>
      </View>
    </ScrollView>
  );
}
