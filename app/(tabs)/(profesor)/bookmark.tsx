/** @format */

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "@/context/GlovalProvider";
import MateriasCreadas from "@/components/(profesor_view)/matrias-created";
const BookMark = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const materias: Array<any> = [];

  const { materiaProfesor } = useGlobalContext()

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <View className="relative flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4">
          <View className="flex-row">
            <Image
              source={images.materias}
              className="w-[100px] h-[80px]"
              resizeMode="contain"
            />
            <View className="justify-center ml-[20px] items-center ">
              <Text className="text-[30px] tracking-tighter uppercase font-plight">
                Materias
              </Text>
            </View>
          </View>
          {materiaProfesor?.length === 0 ? (
            <View className="mt-[20px] mb-[20px]">
              <View className="flex-row items-end">
                <Text className="text-[12px] tracking-tighter">Hi 🤚🏻, for any reason,</Text>
                <Text className="text-[12px] italic font-bold">You don't have any classrom</Text>
              </View>
              <Text className="text-[14px] font-bold">Please create one</Text>
            </View>
          )
            :
            <MateriasCreadas/>
          }
          <View className="flex-row justify-between mt-auto">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1"
              onPress={() => navigation.navigate("home" as never)}
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#5d53e2] px-3 py-1 rounded-md"
              onPress={() => navigation.navigate("createCourses" as never)}
            >
              <Text className="text-white">Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookMark;
