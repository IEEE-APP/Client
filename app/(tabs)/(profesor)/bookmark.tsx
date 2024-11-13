/** @format */

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";
import { useNavigation } from "@react-navigation/native";
const BookMark = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const materias = [
    {
      icon: images.create,
      name: "Aritmética",
      color: "#f56565",
      section: "A",
      vacantes: "10",
      description: "Curso básico de aritmética",
      topics: [
        { name: "Sumas", color: "#f56565" },
        { name: "Restas", color: "#f56565" },
      ],
    },
    {
      icon: images.create,
      name: "Álgebra",
      color: "#2196F3",
      section: "B",
      vacantes: "15",
      description: "Curso básico de álgebra",
      topics: [
        { name: "Funciones Lineales", color: "#2196F3" },
        { name: "Polinomios", color: "#2196F3" },
      ],
    },
    {
      icon: images.create,
      name: "Geometría",
      color: "#48bb78",
      section: "C",
      vacantes: "20",
      description: "Curso básico de geometría",
      topics: [
        { name: "Ángulos", color: "#48bb78" },
        { name: "Triángulos", color: "#48bb78" },
      ],
    },
  ];

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <View className="relative flex-1">
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

          <View className="mt-4 space-y-3">
            {materias.map((materia, index) => (
              <TouchableOpacity
                key={materia.name}
                className="bg-[#eeeeee] border border-1 border-black rounded-md p-4 flex-row items-center justify-between"
                onPress={() =>
                  router.push({
                    pathname: "/(profesor)/courseDetails",
                    params: {
                      ...materia,
                      topics: JSON.stringify(materia.topics), // Serializar topics
                    },
                  })
                }
              >
                <View className="flex-row items-center">
                  <Image
                    source={materia.icon}
                    className="w-[50px] h-[50px]"
                    resizeMode="contain"
                  />
                  <Text className="ml-4 text-lg text-black">
                    {materia.name}
                  </Text>
                </View>
                <View
                  className={`w-[20px] h-[20px] rounded-full`}
                  style={{ backgroundColor: materia.color }}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View className="flex-row justify-between my-auto">
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
