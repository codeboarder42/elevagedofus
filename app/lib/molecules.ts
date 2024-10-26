import { SegmentButtonProps } from "@/app/lib/atoms";
import React from "react";

type CardSize = "small" | "large";

export interface SegmentedControlProps {
  segments: SegmentButtonProps[];
}

export interface ChartCardProps {
  title: React.ReactNode;
  children: React.JSX.Element | number;
  size: CardSize;
}
