import { BlurView } from "expo-blur";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const LogoImage = require("@/assets/images/dinetimelogo.png");
const HomeBanner = require("@/assets/images/homeBanner.png");

export default function Home() {
  return (
    <SafeAreaView className="bg-primary flex items-center justify-center pt-10">
      <View className="flex items-center justify-center w-full">
        <View className="flex flex-row px-4 rounded-lg w-11/12 bg-[#65212b] items-center gap-x-1 shadow-md">
          <Text className="text-background text-lg">Welcome to</Text>
          <Image resizeMode="cover" source={LogoImage} className="h-14 w-24" />
        </View>
      </View>
      <ScrollView className="w-full">
        <ImageBackground
          resizeMode="cover"
          source={HomeBanner}
          className="my-4 w-full h-52 items-center justify-center"
        >
          <BlurView
            intensity={100}
            tint="dark"
            className="w-full shadow-lg p-4"
          >
            <Text className="text-center text-2xl font-bold text-white">
              Dine with your loved ones !
            </Text>
          </BlurView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
