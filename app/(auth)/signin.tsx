import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
  defaultSignInSchemaValues,
  SignInFormType,
  SignInSchema,
} from "@/app/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormInput from "../components/elements/FormInput";
const LogoImage = require("@/assets/images/dinetimelogo.png");
const FrameImage = require("@/assets/images/Frame.png");

export default function SignUp() {
  const signinForm = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: defaultSignInSchemaValues,
  });

  const errors = signinForm.formState.errors;
  const onSubmit = (data: SignInFormType) => {
    console.log(data);
  };

  const router = useRouter();

  return (
    <SafeAreaView className={`bg-background`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 mb-0 flex items-center justify-center">
          <Image className="h-60 w-72" source={LogoImage} />
          <Text className="text-lg text-center font-semibold text-primary mb-6 -mt-10">
            Welcome back!
          </Text>
          <View className="w-3/4 grid gap-y-4">
            <FormInput
              form={signinForm}
              name="email"
              label="Email"
              keyboardType="email-address"
              errors={errors}
            />
            <FormInput
              form={signinForm}
              name="password"
              label="Password"
              errors={errors}
              secureTextEntry
            />
            <TouchableOpacity
              className="p-2 mt-4 bg-primary rounded-lg w-full"
              onPress={signinForm.handleSubmit(onSubmit)}
            >
              <Text className="text-base font-semibold text-center text-white">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="p-2 my-2 rounded-lg flex items-center justify-center flex-row gap-2"
            onPress={() => router.push("/signup")}
          >
            <Text className="text-base font-semibold text-center text-black">
              New user?
            </Text>
            <Text className="text-base font-semibold text-center text-primary">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View>
            <Text className="text-center text-base text-primary font-semibold">
              <View className="border-b-2 border-b-primary w-24" />{" "}
              <Text className="text-black">or {""}</Text>
              <View className="border-b-2 border-b-primary p-2 w-24" />
            </Text>
            <TouchableOpacity
              className="p-2 my-2 rounded-lg flex items-center justify-center flex-row gap-2"
              onPress={() => router.push("/home")}
            >
              <Text className="text-base font-semibold text-center text-black">
                Login as
              </Text>
              <Text className="text-base font-semibold text-center text-primary">
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
