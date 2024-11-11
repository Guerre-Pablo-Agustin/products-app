import Image from "next/image";
import {
  Layout,
  Text,
  Page,
  Button,
  Link,
  List,
  Code,
} from "@vercel/examples-ui";
import buildScreenShot from "../public/build.png";
import { Trans, useTranslation } from "react-i18next";
import useProductStore from "../store/ProductStore";
import { useEffect } from "react";
import i18n from "../lib/i18n"

function Home() {
  const { t } = useTranslation("common");
  const { language } = useProductStore();

  useEffect(() => {
    i18n.changeLanguage(language);
    console.log("language", language);
  }, [language]);

  return (
    <div className="mt-28 md:mt-2">
      <section className="relative flex justify-center items-center py-4 px-2 w-[100%]">
        <div className="relative">
          <Image
            src="/Banner.png"
            alt={t("banner_alt_text")} 
            width={1000}
            height={800}
            className="rounded-md  object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black md:text-white bg-black bg-opacity-50 p-4 rounded-md">
            <h1 className="text-4xl px-8 py-2 font-bold mb-2">
              <Trans i18nKey="headline">Seashores is a website for home products</Trans>
            </h1>
            <p className="text-lg mb-4 md:w-[60%]">
              <Trans i18nKey="description">
                With Seashores, you’ll find a wide variety of home products, from clothing and accessories to food and beverages. Enjoy a broad selection of high-quality products
              </Trans>
            </p>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <Link href="/beauty">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Trans i18nKey="beauty_button">Go to Beauty Page</Trans>
                </Button>
              </Link>
              <Link href="/groceries">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Trans i18nKey="groceries_button">Go to Groceries Page</Trans>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.Layout = Layout;

export default Home;
