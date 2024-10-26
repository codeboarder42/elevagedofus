"use client";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { PieChartCompProps } from "../../lib/organisms";

// Déclaration des couleurs en tant que dictionnaire
const DEFAULT_COLOR = "#CCCCCC"; // Couleur par défaut

export default function PieChartComp({ data, colors }: PieChartCompProps) {
  return (
    <div className="flex flex-col items-center min-h-48">
      <div className="flex w-full place-items-center grow">
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
                <Cell
                  key={entry.name}
                  fill={colors[entry.name] || DEFAULT_COLOR}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
