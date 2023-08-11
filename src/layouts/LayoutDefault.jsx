import React from "react";
import Header from "../componentes/Header";

export default function LayoutDefault({ children }) {
  return (
    <>
      <Header />

      {children}

      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
