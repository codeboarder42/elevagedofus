"use client";

import Image from "next/image";
import styles from "@/app/ui/page.module.scss";
import Button from "@/app/ui/atoms/Button";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/16/solid";
import SegmentedControl from "@/app/ui/molecules/SegmentedControl";
import React, { useState } from "react";

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
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
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
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
