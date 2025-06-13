import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header>--------Here is the header---------</header>
      <main>{children}</main>
      <footer>--------Here is the footer---------</footer>
    </div>
  );
};
export default MainLayout;
