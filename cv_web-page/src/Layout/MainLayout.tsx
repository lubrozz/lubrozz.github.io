import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <header className="text-center">
        <div className="solid-box">
          <h1 className="h1-color">--------Here is the header---------</h1>
        </div>
      </header>
      <br></br>
      <h2 className="text-center">Hello</h2>
      <main>{children}</main>
      <footer className="text-center">
        <div className="solid-box">
          <h2>--------Here is the footer---------</h2>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
