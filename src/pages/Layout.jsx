import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

export default function Layout({ children }) {
  return (
    <div className="px-[1rem]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
