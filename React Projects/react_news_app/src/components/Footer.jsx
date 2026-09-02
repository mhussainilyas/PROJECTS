import React from "react";
import { MdSettingsInputAntenna } from "react-icons/md";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-primary-content p-10">
      <aside>
        <MdSettingsInputAntenna className="text-5xl" />
        <p className="font-bold">
          Royal News Channel Ltd.
          <br />
          Providing reliable Source of Truth since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaFacebook />
          </a>
        </div>
      </nav>
    </footer>
  );
}
