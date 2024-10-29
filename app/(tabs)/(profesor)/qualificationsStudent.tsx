/** @format */

import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import ProfrsorInfo from "@/components/(profesor_view)/info";

interface QualificationDetailProps {
  name: string;
  color: string;
  student: string;
  topic: string;
  question: string;
  answer: string;
  note: number;
}

const qualificationsStudent = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { name, color, student, topic, question, answer, note } =
    params as unknown as QualificationDetailProps;

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
          <TouchableOpacity
            className="mt-4 bg-[#eeeeee] border border-1 border-black rounded-md p-4"
            onPress={() =>
              router.push({
                pathname: "/(profesor)/qualificationsStudentDetails",
                params: {
                  name,
                  color,
                  student,
                  topic,
                  question,
                  answer,
                  note,
                },
              })
            }
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image
                  source={images.lapiz}
                  className="w-[50px] h-[50px]"
                  resizeMode="contain"
                />
                <View className="ml-4">
                  <Text className="text-lg text-black">{topic}</Text>
                  <Text className="text-xs text-black">{student}</Text>
                </View>
              </View>
              <View className="w-[50px] h-[50px] bg-green-500 rounded-md flex items-center justify-center">
                <Text className="text-white">{note} /20</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View className="flex-row justify-between my-auto mt-6">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1"
              onPress={() => router.push("/(profesor)/qualifications")} // Navegar a la ruta anterior
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default qualificationsStudent;
