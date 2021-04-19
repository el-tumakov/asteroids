import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./no-match-screen.scss";

const NoMatchScreen: React.FC = () => (
  <>
    <Header />
    <main className="no-match-screen">
      <p>Извините, страница не найдена!</p>
    </main>
    <Footer />
  </>
);

export default NoMatchScreen;
