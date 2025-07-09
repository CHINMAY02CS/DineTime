import { cn } from "@/app/lib/utils";
import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";

function Input({
  className,
  placeholderClassName,
  ...props
}: TextInputProps & {
  ref?: React.RefObject<TextInput>;
}) {
  return (
    <TextInput
      className={cn(
        "h-11 w-full rounded-lg border border-[#521C0D] bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-orange-500 disabled:opacity-50",
        className,
        props.editable === false && "opacity-50 web:cursor-not-allowed",
        className
      )}
      placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
      {...props}
    />
  );
}

export { Input };
