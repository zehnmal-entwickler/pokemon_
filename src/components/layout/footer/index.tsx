/** @format */
import React, { ReactElement } from "react";
import Image from "next/image";

export default function (): ReactElement {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer data-component="footer-wrapper" className="">
      <div className="mt-5">
        <p data-component="copyright-text" className="">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
