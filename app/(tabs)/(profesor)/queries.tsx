/** @format */

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // Importa el hook de router
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";

const queries = () => {
  const router = useRouter(); // Inicializa el router

  const courses = [
    {
      name: "Aritmética",
      color: "#f56565",
      student: "Juan Pérez",
      topic: "Sumas",
      query: "¿Cómo se resuelve una suma de fracciones?",
    },
    {
      name: "Álgebra",
      color: "#2196F3",
      student: "María López",
      topic: "Funciones Lineales",
      query: "¿Qué es una función lineal?",
    },
    {
      name: "Geometría",
      color: "#48bb78",
      student: "Carlos García",
      topic: "Ángulos",
      query: "¿Cómo se mide un ángulo?",
    },
  ];

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <View className="relative flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4">
          <View className="flex-row items-center justify-between">
            <Image
              source={images.consultas}
              className="w-[100px] h-[80px]"
              resizeMode="contain"
            />
            <View className="absolute top-0 left-[80px] right-0 bottom-0 justify-center items-center">
              <Text className="text-[30px] tracking-tighter uppercase font-plight">
                Consultas
              </Text>
            </View>
          </View>

          {/* Secciones para las materias */}
          <View className="mt-4 space-y-3">
            {courses.map((course, index) => (
              <TouchableOpacity
                key={course.name}
                className="bg-[#eeeeee] border border-1 border-black rounded-md p-4 flex-row items-center justify-between"
                onPress={() =>
                  router.push({
                    pathname: "/(profesor)/queriesDetails",
                    params: {
                      name: course.name,
                      color: course.color,
                      student: course.student,
                      topic: course.topic,
                      query: course.query,
                    },
                  })
                }
              >
                <View className="flex-row items-center">
                  <Image
                    source={images.consultas}
                    className="w-[50px] h-[50px]"
                    resizeMode="contain"
                  />
                  <View>
                    <Text className="ml-4 text-lg text-black">
                      {course.name}
                    </Text>
                    <Text className="ml-4 text-xs text-black">
                      {course.student}
                    </Text>
                  </View>
                </View>
                <View
                  className={`w-[20px] h-[20px] rounded-full`}
                  style={{ backgroundColor: course.color }}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View className="flex-row justify-between my-auto">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1"
              onPress={() => router.push("/(profesor)/home")} // Navegar a la ruta "home"
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default queries;

const styles = StyleSheet.create({});
