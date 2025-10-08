import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Layout({ children }) {
  return (
    <div className="px-[1rem]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
