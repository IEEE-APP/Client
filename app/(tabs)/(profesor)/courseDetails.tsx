/** @format */

import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import ProfrsorInfo from "@/components/(profesor_view)/info";

interface MateriaDetailProps {
  icon: any;
  name: string;
  color: string;
  section: string;
  vacantes: string;
  description: string;
  topics: string; // Cambiar a string para deserializar
}

const CourseDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const {
    icon,
    name,
    color,
    section,
    vacantes,
    description,
    topics = "[]", // Proveer un valor por defecto como string
  } = params as unknown as MateriaDetailProps;

  // Deserializar topics
  const deserializedTopics = JSON.parse(topics) as Array<{
    name: string;
    color: string;
  }>;

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <ScrollView className="flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[12px] mt-[10px] rounded-md p-3">
          <View className="flex-row items-center justify-between mt-[0px] bg-[#ffffff] border border-1 border-black py-4 px-4">
            <Image
              source={images.papel}
              className="w-[50px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-[30px] tracking-tighter uppercase font-plight flex-1 text-center">
              {name}
            </Text>
            <View
              className={`w-[20px] h-[20px] rounded-full`}
              style={{ backgroundColor: color }}
            />
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <View className="flex-1">
              <Text className="text-[20px] tracking-tighter uppercase font-plight">
                Sección
              </Text>
              <View className="bg-[#eeeeee] border border-1 border-black rounded-md p-2">
                <Text className="text-[20px] tracking-tighter uppercase font-plight">
                  {section}
                </Text>
              </View>
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-[20px] tracking-tighter uppercase font-plight">
                Vacantes
              </Text>
              <View className="bg-[#eeeeee] border border-1 border-black rounded-md p-2">
                <Text className="text-[20px] tracking-tighter uppercase font-plight">
                  {vacantes}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-[20px] tracking-tighter uppercase font-plight">
              Descripcion
            </Text>
            <View className="bg-[#eeeeee] border border-1 border-black rounded-md p-2">
              <Text className="text-[20px] tracking-tighter  font-plight">
                {description}
              </Text>
            </View>
          </View>

          <View
            className="mt-4 border-r border-black border-opacity-50 rounded-sm border-1"
            style={{ borderWidth: 0.5, opacity: 0.5 }}
          ></View>
          <View className="mt-4">
            <Text className="text-[20px] tracking-tighter uppercase font-plight">
              Temas
            </Text>
            {Array.isArray(deserializedTopics) &&
              deserializedTopics.map((topic, index) => (
                <TouchableOpacity
                  key={index}
                  className="bg-[#eeeeee] border border-1 border-black rounded-md p-4 flex-row items-center justify-between mt-[8px]"
                  onPress={() =>
                    router.push({
                      pathname: "/(profesor)/courseDetailsStudent",
                      params: {
                        icon: images.papel,
                        name: topic.name,
                        color: topic.color,
                      },
                    })
                  }
                >
                  <View className="flex-row items-center">
                    <Image
                      source={images.papel}
                      className="w-[50px] h-[50px]"
                      resizeMode="contain"
                    />
                    <Text className="ml-4 text-lg text-black">
                      {topic.name}
                    </Text>
                  </View>
                  <View
                    className={`w-[20px] h-[20px] rounded-full`}
                    style={{ backgroundColor: topic.color }}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <View className="flex-row justify-between my-auto">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1 my-4"
              onPress={() => router.push("/(profesor)/bookmark")} // Navegar a la ruta "create"
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetail;
