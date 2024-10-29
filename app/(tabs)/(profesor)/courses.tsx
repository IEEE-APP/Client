/** @format */

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";

const courses = () => {
  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <View className="flex-1 relative">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4">
          <View className="flex-row items-center justify-between">
            <Image
              source={images.materias}
              className="w-[100px] h-[80px]"
              resizeMode="contain"
            />
            <View className="absolute top-0 left-[80px] right-0 bottom-0 justify-center items-center">
              <Text className="text-[30px] tracking-tighter uppercase font-plight">
                Materias
              </Text>
            </View>
          </View>

          {/* Secciones para las materias */}
          <View className="mt-4 space-y-3">
            {["Aritmética", "Álgebra", "Geometría"].map((materia, index) => (
              <View
                key={materia}
                className="bg-[#eeeeee] border border-1 border-black rounded-md p-4 flex-row items-center justify-between"
              >
                <View className="flex-row items-center">
                  <Image
                    source={images.create} // Usa el icono como ejemplo
                    className="w-[50px] h-[50px]"
                    resizeMode="contain"
                  />
                  <Text className="ml-4 text-lg text-black">{materia}</Text>
                </View>
                <View
                  className={`w-[20px] h-[20px] rounded-full ${
                    index === 0
                      ? "bg-red-500"
                      : index === 1
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                />
              </View>
            ))}
          </View>
          <View className="my-auto flex-row justify-between">
            <TouchableOpacity className="bg-[#ff4d4d] rounded-md px-3 py-1">
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#5d53e2] px-3 py-1 rounded-md">
              <Text className="text-white">Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default courses;
