import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex flex-col m-x-auto">
      <section className="flex flex-col">
      <Navbar />
        {children}
      <Footer />
      </section>
    </main>
  );
};

export default Layout;
