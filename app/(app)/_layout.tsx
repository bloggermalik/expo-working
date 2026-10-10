
import { Drawer } from 'expo-router/drawer';
import { Icon } from '@/components/ui/icon';
import {
  House,
  Settings as SettingsIcon,
} from 'lucide-react-native';

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
        drawerActiveTintColor: '#2563eb',
        drawerLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Icon
              as={House}
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerLabel: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Icon
              as={SettingsIcon}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
}
