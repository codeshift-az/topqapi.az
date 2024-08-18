import { useTranslation } from "react-i18next";

// Helmet
import { Helmet } from "react-helmet-async";

// Helpers
import { getPageTitle } from "@/helpers";

// Components
import Error from "@/components/Error";
import Layout from "@/components/Layout";

const NotFound = () => {
  const { t } = useTranslation("pages", { keyPrefix: "notFound" });

  return (
    <Layout>
      <Helmet>
        <title>{getPageTitle(t("title"))}</title>

        <meta property="og:title" content={getPageTitle(t("title"))} />
        <meta property="og:description" content={t("message")} />
        <meta name="description" content={t("message")} />
      </Helmet>

      <Error code={404} title={t("title")} message={t("message")} />
    </Layout>
  );
};

export default NotFound;
