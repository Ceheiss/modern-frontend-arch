import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/patterns/Navigation";
import Cart from "./screens/Cart";
import Products from "./screens/Products";
import UserProfile from "./screens/UserProfile";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
