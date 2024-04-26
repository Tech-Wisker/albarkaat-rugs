/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // add more locales here
    locales: ["en","es","fr","de","it","pt","ru","zh-CN","zh-TW","ja","ko","ar","hi","bn","ur",],
    defaultLocale: "en",
  },
  env : {
    REACT_APP_MYT_BASE_URL : "https://albarkaat-api.onrender.com"
  },
  images: {
    domains: ['drive.google.com'],
  }
};

export default nextConfig;
