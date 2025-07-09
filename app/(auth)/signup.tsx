import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
  defaultSignUpSchemaValues,
  SignUpFormType,
  SignUpSchema,
} from "@/app/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormInput from "../components/elements/FormInput";
const LogoImage = require("@/assets/images/dinetimelogo.png");
const FrameImage = require("@/assets/images/Frame.png");

export default function SignUp() {
  const signupForm = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: defaultSignUpSchemaValues,
  });

  const errors = signupForm.formState.errors;
  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
  };

  const router = useRouter();

  return (
    <SafeAreaView className={`bg-[#F4E7E1]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex items-center justify-center">
          <Image className="h-60 w-72" source={LogoImage} />
          <Text className="text-lg text-center font-semibold text-[#521C0D] mb-6 -mt-10">
            Let&apos;s get you started !
          </Text>
          <View className="w-3/4 grid gap-y-4">
            <FormInput
              form={signupForm}
              name="email"
              label="Email"
              keyboardType="email-address"
              errors={errors}
            />
            <FormInput
              form={signupForm}
              name="password"
              label="Password"
              errors={errors}
              secureTextEntry
            />

            <TouchableOpacity
              className="p-2 mt-4 bg-[#521C0D] rounded-lg w-full"
              onPress={signupForm.handleSubmit(onSubmit)}
            >
              <Text className="text-base font-semibold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="p-2 my-2 rounded-lg flex items-center justify-center flex-row gap-2"
            onPress={() => router.push("/signin")}
          >
            <Text className="text-base font-semibold text-center text-black">
              Already a user?
            </Text>
            <Text className="text-base font-semibold text-center text-[#521C0D]">
              Sign In
            </Text>
          </TouchableOpacity>
          <View>
            <Text className="text-center text-base text-[#521C0D] font-semibold">
              <View className="border-b-2 border-b-[#521C0D] w-24" />{" "}
              <Text className="text-black">or {""}</Text>
              <View className="border-b-2 border-b-[#521C0D] p-2 w-24" />
            </Text>
            <TouchableOpacity
              className="p-2 my-2 rounded-lg flex items-center justify-center flex-row gap-2"
              onPress={() => router.push("/home")}
            >
              <Text className="text-base font-semibold text-center text-black">
                Login as
              </Text>
              <Text className="text-base font-semibold text-center text-[#521C0D]">
                Guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image
            className="h-full w-full"
            resizeMode="contain"
            source={FrameImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
