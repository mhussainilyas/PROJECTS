import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full py-12 px-6">
      <div className="flex max-sm:flex-col max-sm:gap-3 items-center justify-between">
        <div className="flex items-center gap-3 max-sm:order-1">
          <img src="/store-logo.png" alt="logo" className="max-w-13" />
          <h2 className="text-xl font-semibold">Seven Royals Store</h2>
        </div>
        <div className="flex gap-4 max-sm:order-0">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
        </div>
      </div>

      <hr className="bg-white/9 h-px border-none my-5" />

      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-3 justify-between text-white/40 max-sm:text-sm">
        <p>© 2026 Seven Royals Store. All Rights Reserved.</p>
        <p>Quality Products, Royal Service</p>
      </div>
    </footer>
  );
}

export default Footer;
