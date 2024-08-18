import React from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const LanguageMiddleware = ({ children }: Props) => {
  const { i18n } = useTranslation();

  const { pathname } = useLocation();

  const pathLang = pathname.split("/")[1];

  if (!pathLang || ["en", "az", "ru"].indexOf(pathLang) === -1) {
    return <Navigate to={`/${i18n.language}${pathname}`} />;
  }

  if (pathLang !== i18n.language) {
    i18n.changeLanguage(pathLang);
    localStorage.setItem("LANG", pathLang);
  }

  return <React.Fragment>{children}</React.Fragment>;
};
