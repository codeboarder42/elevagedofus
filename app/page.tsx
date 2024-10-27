"use client";

import Image from "next/image";
import styles from "@/app/ui/page.module.scss";
import Button from "@/app/ui/atoms/Button";
import { HomeIcon } from "@heroicons/react/16/solid";
import SegmentedControl from "@/app/ui/molecules/SegmentedControl";
import { useState } from "react";

export default function Home() {
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
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly !.</li>
        </ol>

        <div className={styles.ctas}>
          <Button variant="primary" icon={HomeIcon} size="large">
            Primaire
          </Button>
          <Button variant="secondary" icon={HomeIcon} size="large">
            Secondaire
          </Button>
          <Button variant="tertiary" icon={HomeIcon} size="large">
            Tertiaire
          </Button>
        </div>
        <div>
          <SegmentedControl segments={mountChoice} />
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
