import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { icons, images } from "@/constants";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '@/app/CustomDrawerContent';
import { useGlobalContext } from '@/context/GlovalProvider';

const TabIcon = ({ icon, color, name, focused }: { icon: ImageSourcePropType | undefined, color: string, name: string, focused: boolean }) => {
  const { credentials } = useGlobalContext()
  return (
    <View className='items-center justify-center gap-1'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >{name}</Text>
    </View>
  );
}

const TabsStudent = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderWidth: 1,
          borderTopColor: "#232533",
          height: 60
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name='Home'
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name='resolver'
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name='Excersices'
              focused={focused}
            />
          )
        }}
      />
      <Tabs.Screen
        name='courses'
        options={{
          title: "Courses",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name='Courses'
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
  );
}

const Drawer = createDrawerNavigator();

const RootLayout = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabel: () => null, // Oculta el nombre de la pestaña
      }}
    >
      <Drawer.Screen name="TabsStudent" component={TabsStudent} />
    </Drawer.Navigator>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});