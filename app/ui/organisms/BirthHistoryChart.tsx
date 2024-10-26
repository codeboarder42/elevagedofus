import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";

export default function BirthHistoryChart() {
  const data = [
    {
      name: "2024-01",
      naissances: 12,
    },
    {
      name: "2024-02",
      naissances: 30,
    },
    {
      name: "2024-03",
      naissances: 2,
    },
    {
      name: "2024-04",
      naissances: 6,
    },
    {
      name: "2024-05",
      naissances: 22,
    },
    {
      name: "2024-06",
      naissances: 16,
    },
    {
      name: "2024-07",
      naissances: 31,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="naissances"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
