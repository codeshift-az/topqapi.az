import React from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// i18n
import { useTranslation } from "react-i18next";

// Routes
import { publicRoutes } from "@/routes";

// Middlewares
import { LanguageMiddleware } from "@/routes/middlewares";

// Assets
import "@/assets/css/styles.css";

const App = () => {
  const { i18n } = useTranslation();

  const supportedLngs = i18n.options.supportedLngs || ["en"];

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, index) => (
          <React.Fragment key={index}>
            <Route
              path={route.path}
              element={
                <LanguageMiddleware>{route.component}</LanguageMiddleware>
              }
            />
            {supportedLngs.map((lng) => (
              <Route
                key={`${index}-${lng}`}
                path={`/${lng}/${route.path.replace("/", "")}`}
                element={
                  <LanguageMiddleware>{route.component}</LanguageMiddleware>
                }
              />
            ))}
          </React.Fragment>
        ))}

  
      </Routes>
    </React.Fragment>
  );
};

export default App;
