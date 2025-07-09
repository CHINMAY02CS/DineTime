import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";

const FormInput = ({
  form,
  errors,
  label,
  name,
  keyboardType,
  ...props
}: {
  form: any;
  errors: any;
  label: string;
  name: string;
  keyboardType?: any;
}) => {
  return (
    <View className="w-full">
      <Label className="mb-1">{label}</Label>
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <Input
            placeholder={`Enter your ${label}...`}
            value={field.value}
            onChangeText={field.onChange}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            keyboardType={keyboardType}
            {...props}
          />
        )}
      />
      {errors?.[name]?.message && (
        <Text className="text-xs text-red-500 mt-1">
          {errors?.[name].message}
        </Text>
      )}
    </View>
  );
};
export default FormInput;
