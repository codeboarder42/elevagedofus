import { ResponsiveContainer } from "recharts";
import { ChartProps } from "../../lib/atoms";

export default function Graph({ children }: ChartProps) {
  return <div className="flex-1 w-full min-h-0">{children}</div>;
}
