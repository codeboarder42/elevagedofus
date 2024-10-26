"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { BarChartCompProps } from "../../lib/organisms";

export default function BarChartComp({ data, colors }: BarChartCompProps) {
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
