/** @format */

import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import ProfrsorInfo from "@/components/(profesor_view)/info";

interface StudentDetailProps {
  icon: any;
  name: string;
  color: string;
}

const courseDetailsStudent = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { icon, name, color } = params as unknown as StudentDetailProps;

  // Lista de alumnos (ejemplo)
  const students = [
    { name: "Juan Pérez" },
    { name: "María López" },
    { name: "Carlos García" },
    { name: "Martin Guzman" },
  ];

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <ScrollView className="flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[12px] mt-[10px] rounded-md p-3">
          <View className="flex-row items-center justify-between mt-[0px] bg-[#ffffff] border border-1 border-black py-4 px-4">
            <Image
              source={icon}
              className="w-[50px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-[24px] tracking-tighter  font-plight flex-1 text-center">
              {name}
            </Text>
            <View
              className={`w-[20px] h-[20px] rounded-full`}
              style={{ backgroundColor: color }}
            />
          </View>
          <View
            className="mt-4 border-r border-black border-opacity-50 rounded-sm border-1"
            style={{ borderWidth: 0.5, opacity: 0.5 }}
          ></View>
          <View className="mt-4">
            <Text className="text-[20px] tracking-tighter uppercase font-plight">
              Alumnos
            </Text>
            {students.map((student, index) => (
              <View
                key={index}
                className="bg-[#eeeeee] border border-1 border-black rounded-md p-4 flex-row items-center justify-between mt-[8px]"
              >
                <View className="flex-row items-center">
                  <Image
                    source={images.papel}
                    className="w-[50px] h-[50px]"
                    resizeMode="contain"
                  />
                  <Text className="ml-4 text-lg text-black">
                    {student.name}
                  </Text>
                </View>
                <View
                  className={`w-[20px] h-[20px] rounded-full`}
                  style={{ backgroundColor: color }}
                />
              </View>
            ))}
          </View>
          <View className="flex-row justify-between my-auto">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1 my-4"
              onPress={() => router.push("/(profesor)/home")} // Navegar a la ruta "create"
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default courseDetailsStudent;
