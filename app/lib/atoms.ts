import React, { ReactElement } from "react";

export interface SegmentButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

import { PieChart, LineChart, BarChart, AreaChart } from "recharts";

type ChartElement = ReactElement<
  typeof PieChart | typeof LineChart | typeof BarChart | typeof AreaChart
>;

export interface ChartProps {
  children: ChartElement;
}

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
