import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="bg-blue-50 flex-1 items-center justify-center">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={() => router.navigate("/home")}>
        Go to tabs
      </TouchableOpacity>
    </View>
  );
}
