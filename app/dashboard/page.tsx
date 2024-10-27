"use client";

import ChartCard from "../ui/molecules/ChartCard";
import MountTypeChart from "../ui/organisms/MountTypeChart";
import SexeChart from "../ui/organisms/SexeChart";
import BirthHistoryChart from "../ui/organisms/BirthHistoryChart";
import FertileCountChart from "../ui/organisms/FertileCountChart";
import CountPregnancy from "../ui/organisms/CountPregnancy";
import CountReadyDelivers from "../ui/organisms/CountReadyDelivers";
import { useState } from "react";
import SegmentedControl from "@/app/ui/molecules/SegmentedControl";

export default function Page() {
  const [activeMount, setActiveMount] = useState("D"); // D par défaut

  function selectMount(value: string) {
    setActiveMount(value);
  }
  const mountChoice = [
    {
      children: "🐔",
      isActive: activeMount === "D",
      onClick: () => selectMount("D"),
    },
    {
      children: "🪲",
      isActive: activeMount === "V",
      onClick: () => selectMount("V"),
    },
    {
      children: "🦑",
      isActive: activeMount === "M",
      onClick: () => selectMount("M"),
    },
  ];

  return (
    <main className="flex flex-col gap-4 w-full h-[99%] p-4">
      <div className="grid grid-cols-[1fr_2fr] items-center">
        <SegmentedControl segments={mountChoice} />
        <ChartCard
          title={`Répartition par type de monture`}
          children={<MountTypeChart />}
          size="small"
        />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-8 h-full">
        <ChartCard
          title={`Répartition par sexe`}
          children={<SexeChart />}
          size="small"
        />
        <ChartCard
          title={`Nombre de gestations en cours`}
          children={<CountPregnancy />}
          size="small"
        />
        <ChartCard
          title={`Répartition par sexe`}
          children={<FertileCountChart />}
          size="small"
        />
        <ChartCard
          title={`Nombre d'acouchements prêts`}
          children={<CountReadyDelivers />}
          size="small"
        />
        <ChartCard
          title={`Historique des acouchements`}
          children={<BirthHistoryChart />}
          size="large"
        />
      </div>
    </main>
  );
}
