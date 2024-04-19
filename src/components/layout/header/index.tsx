/** @format */
import React, { ReactElement, useState, useContext } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

function Header(): ReactElement {
  return (
    <header
      className="sticky top-0 bg-white border-b border-solid border-gray-2 z-[1500]"
      data-component="test-header"
    ></header>
  );
}

export default Header;
