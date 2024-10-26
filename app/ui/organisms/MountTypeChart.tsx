import { PieData } from "../../lib/organisms";
import { PieChart, Tooltip, Pie, Cell, ResponsiveContainer } from "recharts";

export default function MountTypeChart() {
  const data: PieData[] = [
    { name: "Volkorne", value: 12 },
    { name: "Dragodine", value: 24 },
    { name: "Muldo", value: 5 },
  ];

  const colors: { [key: string]: string } = {
    Volkorne: "#eea221",
    Dragodine: "#00a1a6",
    Muldo: "#c86eff",
  };

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight={50}
      minWidth={50}
    >
      <PieChart>
        <Tooltip
          contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
          labelStyle={{ display: "none" }}
          cursor={{ fill: "none" }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={colors[entry.name]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
