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
      style={{color:color}}
      >{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor:"#FFA001",
          tabBarInactiveTintColor:"#CDCDE0",
          tabBarStyle:{
            backgroundColor:"#161622",
            borderWidth:1,
            borderTopColor:"#232533",
            height:60
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
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name='Create Ejercicio'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: "BookMark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name='Materias'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            /*             tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Clasificacion"
                focused={focused}
              />
            ), */
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: "Setting",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Ajustes"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="queries"
          options={{
            title: "Queries",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Consultas"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="qualifications"
          options={{
            title: "Qualifications",
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="createCourses"
          options={{
            title: "Create Courses",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="courses"
          options={{
            title: "Courses",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="courseDetails"
          options={{
            title: "CourseDetails",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="courseDetailsStudent"
          options={{
            title: "CourseDetailsStudent",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="queriesDetails"
          options={{
            title: "QueriesDetails",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="qualificationsStudent"
          options={{
            title: "QualificationsStudent",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />
        <Tabs.Screen
          name="qualificationsStudentDetails"
          options={{
            title: "QualificationsStudentDetails",
            headerShown: false,
            tabBarButton: () => null, // Ocultar completamente de la barra de navegación
          }}
        />        
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})