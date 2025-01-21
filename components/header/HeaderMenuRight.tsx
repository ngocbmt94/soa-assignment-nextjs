"use client";
import IconFish from "@/assets/icons/home/Fishing.svg";
import IconFishActive from "@/assets/icons/home/Fishing-hover.svg";
import IconMount from "@/assets/icons/home/Mountains.svg";
import IconMountActive from "@/assets/icons/home/Mountains-hover.svg";
import IconCross from "@/assets/icons/home/Crosshair.svg";
import IconCrossActive from "@/assets/icons/home/Crosshair-hover.svg";
import IconArrowWhite from "@/assets/icons/home/Arrow_white.svg";
import { Button, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import LanguageSwitcher from "../lang/LanguageSwitcher";
const settings = [
  { icon: <IconMount />, iconActive: <IconMountActive /> },
  { icon: <IconFish />, iconActive: <IconFishActive /> },
  { icon: <IconCross />, iconActive: <IconCrossActive /> },
];

export default function HeaderMenuRight() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <>
      <MenuList disablePadding sx={{ display: "flex", gap: "16px" }}>
        {settings.map((setting, index) => (
          <MenuItem key={index} sx={{ p: 0, "&:hover": { background: "transparent" } }} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
            {hoverIndex === index ? setting.iconActive : setting.icon}
          </MenuItem>
        ))}
      </MenuList>
      <Button disableRipple variant="button_animation">
        <span className="button-text">Réservez maintenant</span>
        <span className="end-icon">
          <IconArrowWhite />
        </span>
      </Button>
      <LanguageSwitcher />
    </>
  );
}
