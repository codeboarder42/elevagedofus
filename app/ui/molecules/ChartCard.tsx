import { ChartCardProps } from "@/app/lib/molecules";
import Title from "../atoms/Title";

type CardSize = "small" | "large";

export default function ChartCard({ title, children, size }: ChartCardProps) {
  const sizeStyles: Record<CardSize, string> = {
    small: "",
    large: "col-span-4",
  };

  const baseStyles =
    "flex flex-col rounded-lg bg-white h-full min-h-40 items-center p-4";

  const classes = `${baseStyles} ${sizeStyles[size]}`;

  return (
    <div className={classes}>
      <Title>{title}</Title>
      <div className="flex-1 w-full min-h-0">{children}</div>
    </div>
  );
}
