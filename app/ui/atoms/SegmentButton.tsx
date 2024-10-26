import React from "react";
import { SegmentButtonProps } from "@/app/lib/atoms";

export default function SegmentButton({
  children,
  className,
  isActive,
  onClick,
  ...rest
}: SegmentButtonProps) {
  return (
    <button
      {...rest}
      className={`flex px-5 py-2.5 cursor-pointer ${className} ${
        isActive
          ? "bg-green-500 text-white"
          : "bg-white text-green-500 hover:bg-green-100"
      } transition-colors duration-150 ease-in-out`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
