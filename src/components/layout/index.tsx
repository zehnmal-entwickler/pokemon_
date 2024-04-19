/** @format */
import React, { ReactElement } from "react";
import Header from "./header";
import Footer from "./footer";
import { ContentWrapper } from "./styled";

function Layout({ children }): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
