import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
