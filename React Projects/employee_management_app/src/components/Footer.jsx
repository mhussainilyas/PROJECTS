import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200">
      <aside className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-5">
        <p className="text-base-content/50">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">RoyalEmployee</span> - All right
          reserved by Dev Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
