import SegmentButton from "../atoms/SegmentButton";
import React from "react";
import { SegmentedControlProps } from "@/app/lib/molecules";

export default function SegmentedControl({ segments }: SegmentedControlProps) {
  return (
    <div className="flex border-2 border-green-500 rounded-lg shadow-sm overflow-hidden w-fit max-h-12">
      {segments.map((segment, index) => (
        <SegmentButton
          key={index}
          isActive={segment.isActive}
          onClick={segment.onClick}
          className={`${
            index === 0 ? "rounded-l-md" : ""
          } border border-green-500
          } ${index === segments.length - 1 ? "rounded-r-md" : ""}`}
          children={segment.children}
        />
      ))}
    </div>
  );
}
