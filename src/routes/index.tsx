import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Products
  { path: "/products", component: <Pages.NotFound /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.NotFound /> },

  // About Us
  { path: "/about", component: <Pages.NotFound /> },

  // Contact
  { path: "/contact", component: <Pages.NotFound /> },

  // Our Stores
  { path: "/stores", component: <Pages.NotFound /> },

  // Account
  { path: "/account", component: <Pages.NotFound /> },

  // Favorites
  { path: "/account/favorites", component: <Pages.NotFound /> },

  // Cart
  { path: "/account/cart", component: <Pages.NotFound /> },

  // Checkout
  { path: "/account/checkout", component: <Pages.NotFound /> },

  // Orders
  { path: "/account/orders", component: <Pages.NotFound /> },

  // Order Details
  { path: "/account/orders/:id", component: <Pages.NotFound /> },

  // Login
  { path: "/auth/login", component: <Pages.NotFound /> },

  // Register
  { path: "/auth/register", component: <Pages.NotFound /> },

  // Forgot Password
  { path: "/auth/forgot-password", component: <Pages.NotFound /> },

  // Reset Password
  { path: "/auth/reset-password", component: <Pages.NotFound /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
