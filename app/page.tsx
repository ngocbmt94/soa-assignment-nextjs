"use client";

import BannerVideo from "@/components/video/BannerVideo";
import { Typography } from "@mui/material";

import HeaderBar from "../components/header/HeaderBar";

import LanguageSwitcher from "../components/lang/LanguageSwitcher";
import SWRProvider from "./providers/SWRProvider";
import TranslationProvider from "./providers/TranslationProvider";

import { useTranslations } from "next-intl";
import CardGrid from "@/components/CardGrid";
import CustomCarousel from "@/components/CustomCarousel";

// export const metadata = {
//   title: "App Router",
// };

export default function Page() {
  const t = useTranslations();
  const headMenu = t("bloc_1.title"); // Enable returning arrays
  const headMenu2 = t("banner_menu.0"); // Enable returning arrays

  return (
    <div>
      <HeaderBar />
      <BannerVideo />
      <CardGrid />
      <CustomCarousel></CustomCarousel>
      {headMenu} - {headMenu2}
    </div>
  );
}
