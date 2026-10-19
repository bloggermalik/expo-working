
import { View, Pressable, ScrollView, Alert } from 'react-native';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { authClient } from '@/lib/auth-client';
import {
  Moon,
  Bell,
  UserRound,
  ShieldCheck,
  ChevronRight,
  Info,
  LogOut
} from 'lucide-react-native';
import { useState } from 'react';


type SettingRowProps = {
  icon: typeof Moon;
  title: string;
  description: string;
  onPress?: () => void;
};

function SettingRow({
  icon,
  title,
  description,
  onPress,
}: SettingRowProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-3 rounded-xl p-4 active:opacity-70"
    >
      <View className="h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon
          as={icon}
          className="text-primary"
          size={22}
        />
      </View>

      <View className="flex-1 gap-1">
        <Text className="font-semibold text-foreground">
          {title}
        </Text>

        <Text className="text-sm text-muted-foreground">
          {description}
        </Text>
      </View>

      <Icon
        as={ChevronRight}
        className="text-muted-foreground"
        size={20}
      />
    </Pressable>
  );
}

export default function SettingsScreen() {
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out',
        style: 'destructive',
        onPress: async () => {
          setLoggingOut(true);
          const { error } = await authClient.signOut();
          setLoggingOut(false);
          if (error) {
            Alert.alert('Error', error.message ?? 'Could not log out');
          }
          // On success the session becomes null and Stack.Protected
          // sends the user back to the login screen automatically.
        },
      },
    ]);
  };
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="p-4 pb-8"
    >
      <View className="mb-6 gap-1">
        <Text className="text-2xl font-bold text-foreground">
          Settings
        </Text>

        <Text className="text-muted-foreground">
          Manage your app preferences.
        </Text>
      </View>

      <View className="mb-6 rounded-2xl border border-border bg-card p-2">
        <Text className="px-3 pb-2 pt-3 text-sm font-semibold text-muted-foreground">
          PREFERENCES
        </Text>

        <SettingRow
          icon={Moon}
          title="Appearance"
          description="Choose light or dark mode"
          onPress={() => { }}
        />

        <SettingRow
          icon={Bell}
          title="Notifications"
          description="Manage notification preferences"
          onPress={() => { }}
        />
      </View>

      <View className="mb-6 rounded-2xl border border-border bg-card p-2">
        <Text className="px-3 pb-2 pt-3 text-sm font-semibold text-muted-foreground">
          ACCOUNT & PRIVACY
        </Text>

        <SettingRow
          icon={UserRound}
          title="Account"
          description="Manage your profile"
          onPress={() => { }}
        />

        <SettingRow
          icon={ShieldCheck}
          title="Privacy"
          description="Review privacy preferences"
          onPress={() => { }}
        />
      </View>

      <View className="rounded-2xl border border-border bg-card p-2">
        <Text className="px-3 pb-2 pt-3 text-sm font-semibold text-muted-foreground">
          ABOUT
        </Text>

        <SettingRow
          icon={Info}
          title="About this app"
          description="Version and application information"
          onPress={() => { }}
        />
      </View>
      <Pressable
        onPress={handleLogout}
        disabled={loggingOut}
        className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 active:opacity-70 disabled:opacity-50"
      >
        <Icon as={LogOut} className="text-destructive" size={20} />
        <Text className="font-semibold text-destructive">
          {loggingOut ? 'Logging out...' : 'Log out'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
