import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1>--------Here is the header---------</h1>
      </header>
      <br></br>
      <main>{children}</main>
      <footer style={{ textAlign: "center" }}>
        --------Here is the footer---------
      </footer>
    </div>
  );
};
export default MainLayout;
