"use client";

import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [connected, setConnected] = useState(false);

  function handleCLick() {
    if (connected) {
      setConnected(false);
      router.push("/");
    } else {
      setConnected(true);
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex bg-rta-green p-basic justify-between items-center text-amber-50">
      <div className="flex items-center gap-4">
        <span className="text-4xl">🦄</span>
        <span className="font-bold text-lg">RaiseThemAll</span>
      </div>
      <Button size="small" variant="secondary" onClick={handleCLick}>
        {connected ? "Déconnexion" : "Connexion"}
      </Button>
    </div>
  );
}
