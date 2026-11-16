import Head from "next/head";
import { Box, Center, Text } from "@chakra-ui/react";
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Categories/Category";
import Collections from "@/components/Collections/Collections";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {locale} = useRouter();
  console.log("locale",locale)
  const {t} = useTranslation()
 
  return (
    <>
      <Head>
        <title>Albarkaat Overseas | Premium Handmade Rugs & Carpets</title>
        <meta name="description" content="Albarkaat Overseas offers premium handmade rugs and carpets. Explore our wide range of collections crafted with quality and elegance for homes worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="handmade rugs, carpets, rugs overseas, albarkaat rugs, premium carpets, rug collections" />
        <meta property="og:title" content="Albarkaat Overseas | Premium Handmade Rugs & Carpets" />
        <meta property="og:description" content="Explore premium handmade rugs and carpets from Albarkaat Overseas. Quality craftsmanship delivered worldwide." />
        <meta property="og:url" content="https://albarkaat-overseas.com" />
      </Head>
      <Banner/>
      <Center mt={"60px"}>
      <Text fontWeight="bold" fontSize="xx-large">{t("categories.heading")}</Text>
      </Center>
      <Category/>
      <Center mt={"60px"}>
      <Text fontWeight="bold" fontSize="xx-large">{t("collections.heading")}</Text>
      </Center>
      <Collections/>
    </>
  );
}
