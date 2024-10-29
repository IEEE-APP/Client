/** @format */

import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Setting = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    descripcion: "",
    especialidad: "",
  });

  return (
    <SafeAreaView
      className=" bg-primary"
      style={{
        minHeight: "103.40%", // min-h-screen
        paddingHorizontal: wp("4.4%"), // px-4
        paddingVertical: hp("5.5%"), // py-[40px]
      }}
    >
      <View className="relative flex-1">
        <ProfrsorInfo />
        <View
          className="flex-1 bg-white rounded-md "
          style={{
            marginBottom: hp("1.42%"), //mb-[10px]
            marginTop: hp("1.42%"), // mt-[10px]
            padding: wp("4%"), // p-4
          }}
        >
          <View
            className="flex-row items-center justify-between mt-[13px]"
            style={{
              marginTop: -hp("0.05%"), // mt-[-px]
            }}
          >
            <Image
              source={images.ajustes}
              /*  className="w-[100px] h-[50px]" */
              resizeMode="contain"
              style={{
                width: wp("25%"), // w-[100px]
                height: hp("7.25%"), // h-[50px]
              }}
            />
            <View
              className="absolute items-center justify-center"
              style={{
                top: 0,
                left: wp("20%"),
                right: 0,
                bottom: 0,
              }}
            >
              <Text
                className="uppercase font-plight"
                style={{
                  fontSize: wp("7.5%"), // text-[30px]
                  letterSpacing: -wp("0.5%"), // tracking-tighter
                }}
              >
                Ajustes
              </Text>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-black">Nombre</Text>
            <TextInput
              className="bg-[#eeeeee] border border-1 border-black p-2 rounded-md"
              placeholder="Fedor..."
              value={form.descripcion}
              onChangeText={(e) => setForm({ ...form, descripcion: e })}
            />
            <Text className="text-black">Apellido</Text>
            <TextInput
              className="bg-[#eeeeee] border border-1 border-black p-2 rounded-md"
              placeholder="mikha..."
              value={form.apellido}
              onChangeText={(e) => setForm({ ...form, descripcion: e })}
            />
            <Text className="text-black">Descripcion</Text>
            <TextInput
              className="bg-[#eeeeee] border border-1 border-black p-2 rounded-md"
              placeholder="..."
              value={form.descripcion}
              onChangeText={(e) => setForm({ ...form, descripcion: e })}
            />
            <Text className="text-black">Especialidad</Text>
            <TextInput
              className="bg-[#eeeeee] border border-1 border-black p-2 rounded-md"
              placeholder="..."
              value={form.especialidad}
              onChangeText={(e) => setForm({ ...form, especialidad: e })}
            />
          </View>
          {/* Espaciado adicional para los botones */}
          <View
            className="space-y-2"
            style={{
              marginTop: hp("3%"), // mt-6
            }}
          >
            <TouchableOpacity
              className="bg-[#5d53e2]  rounded-md self-center"
              style={{
                paddingHorizontal: wp("6%"), // px-6
                paddingVertical: hp("2%"), // py-2
              }}
            >
              <Text className="text-center text-white">Cambiar Contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#ff4d4d]  rounded-md self-center"
              style={{
                paddingHorizontal: wp("6%"), // px-6
                paddingVertical: hp("2%"), // py-2
              }}
            >
              <Text className="text-center text-white">Eliminar Cuenta</Text>
            </TouchableOpacity>
          </View>
          {/* Botón Volver con margen adicional para separarlo del resto */}
          <View className="mt-5">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md "
              style={{
                paddingHorizontal: wp("4%"), // px-4
                paddingVertical: hp("1%"), // py-2
                width: wp("30%"), // w-[120px]
              }}
            >
              <Text
                className="text-center text-white"
                onPress={() => router.push("/(profesor)/home")}
              >
                Volver
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
