/** @format */

import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import AnswerForm from "@/components/(profesor_view)/answerForm";

interface QueryDetailProps {
  name: string;
  color: string;
  student: string;
  topic: string;
  query: string;
}

const queriesDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { name, color, student, topic, query } =
    params as unknown as QueryDetailProps;

  const handleSend = (answer: string, imageUri: string | null) => {
    // Aquí puedes manejar el envío de la respuesta y la imagen
    alert(`Respuesta enviada: ${answer}, Imagen: ${imageUri}`);
  };

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <ScrollView className="flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[12px] mt-[10px] rounded-md p-3">
          <View className="flex-row items-center justify-between mt-[0px] bg-[#ffffff] border border-1 border-black py-4 px-4">
            <Image
              source={images.consultas}
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
            <Text className="text-[14px] tracking-tighter  font-plight">
              Tema
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md text-center">
              {topic}
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight">
              Alumno
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md text-center">
              {student}
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight">
              Consulta
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md">
              {query}
            </Text>
          </View>
          <AnswerForm onSend={handleSend} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default queriesDetails;
