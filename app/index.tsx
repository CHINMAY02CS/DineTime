import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const LogoImage = require("@/assets/images/dinetimelogo.png");
const FrameImage = require("@/assets/images/Frame.png");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#F4E7E1]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex items-center justify-center">
          <Image className="h-72 w-72" source={LogoImage} />
          <View className="w-3/4">
            <TouchableOpacity
              className="p-2 my-2 bg-[#521C0D] rounded-lg"
              onPress={() => router.push("/signup")}
            >
              <Text className="text-base font-semibold text-center text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="p-2 my-2 border-[#521C0D] border rounded-lg max-w-fit"
              onPress={() => router.push("/home")}
            >
              <Text className="text-base font-semibold text-center text-[#521C0D]">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-base text-[#521C0D] my-4 font-semibold">
              <View className="border-b-2 border-b-[#521C0D] p-2 mb-1 w-24" />{" "}
              <Text className="text-black">or {""}</Text>
              <View className="border-b-2 border-b-[#521C0D] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity
              className="p-2 my-2 rounded-lg flex items-center justify-center flex-row gap-2"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-base font-semibold text-center text-black">
                Already a user?
              </Text>
              <Text className="text-base font-semibold text-center text-[#521C0D] underline">
                Sign In
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
