import { useRef } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { handleType } from "./types";
import { contactTypes } from "./types";
import { Switch } from "@mantine/core";

export default function Nav({
  scrollSize,
  setScrollSize,
  screenPercent,
  bgMode,
  setBgMode,
}: contactTypes) {
  const navPages = [
    { name: "Title", link: "#Title" },
    { name: "About", link: "#Experience" },
    { name: "Projects", link: "#Projects" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <body className="h-10 w-full fixed z-50 top-0 flex flex-row justify-end items-center mr-10">
      {screenPercent < 0.015 ? (
        <Switch
          className="mr-5"
          onLabel="Dark"
          offLabel="Light"
          checked={bgMode}
          size="md"
          color="violet"
          onChange={(event) => setBgMode?.(event.currentTarget.checked)}
        />
      ) : null}
    </body>
  );
}
