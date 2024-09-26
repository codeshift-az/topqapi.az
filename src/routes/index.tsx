import * as Pages from "@/pages";

export const publicRoutes = [
  // Home
  { path: "/", component: <Pages.Home /> },

  // Products
  { path: "/products", component: <Pages.NotFound /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.NotFound /> },

  // About Us
  { path: "/about", component: <Pages.About /> },

  // Contact
  { path: "/contact", component: <Pages.Contact /> },

  // Our Stores
  { path: "/stores", component: <Pages.NotFound /> },

  // Account
  { path: "/account", component: <Pages.NotFound /> },

  //Account Details
  { path: "/account/details", component: <Pages.AccountDetails /> },

  //Account Address
  { path: "/account/address", component: <Pages.Address /> },

  //Account Favorites
  { path: "/account/favorites", component: <Pages.Favorites /> },

  // Favorites
  { path: "/account/favorites", component: <Pages.NotFound /> },

  // Cart
  { path: "/account/cart", component: <Pages.NotFound /> },

  // Checkout
  { path: "/account/checkout", component: <Pages.Checkout /> },

  // Orders
  { path: "/account/orders", component: <Pages.Orders /> },

  // Order Details
  { path: "/account/orders/:id", component: <Pages.OrdersDetails /> },

  // Login
  { path: "/auth/login", component: <Pages.Login /> },

  // Register
  { path: "/auth/register", component: <Pages.Register /> },

  // Forgot Password
  { path: "/auth/forgot-password", component: <Pages.ForgotPassword /> },

  // Reset Password
  { path: "/auth/reset-password", component: <Pages.ResetPassword /> },

  // Not Found
  { path: "*", component: <Pages.NotFound /> },
];
