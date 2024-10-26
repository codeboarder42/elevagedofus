import { BarData } from "../../lib/organisms";
import { ResponsiveContainer, BarChart, Tooltip, Legend, Bar } from "recharts";

export default function FertileCountChart() {
  const data: BarData[] = [{ name: "Féconde", mâle: 4, femelle: 6 }];

  const colors: { [key: string]: string } = {
    mâle: "#00b8ed",
    femelle: "#ff24b5",
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Tooltip
          contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
          labelStyle={{ display: "none" }}
          cursor={{ fill: "none" }}
        />
        <Legend />
        {data.map((entry) =>
          Object.keys(entry).map((key) =>
            key !== "name" ? (
              <Bar key={key} dataKey={key} fill={colors[key]} barSize={33} />
            ) : null
          )
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
