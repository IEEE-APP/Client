import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons, images } from "@/constants"

const TabIcon = ({ icon, color, name, focused }: { icon: ImageSourcePropType | undefined, color: string, name: string, focused: boolean }) => {
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
  )
}

const TabsStudent = () => {
  return (
    <>
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
            title: "Homes",
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
            title:"Courses",
            headerShown:false,
            tabBarIcon:({color, focused}) =>(
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
    </>
  )
}

export default TabsStudent

const styles = StyleSheet.create({})