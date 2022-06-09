import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <Navigation />

      {children}

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
