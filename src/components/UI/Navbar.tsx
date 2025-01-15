import React, { useState, useEffect } from "react";
import HeaderNavBarNorm from "./nav/HeaderNavBarNorm";
import HeaderNavBarMobile from "./nav/HeaderNavMobil";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // Überprüft die Fensterbreite und setzt isMobile entsprechend
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Überprüft die Fensterbreite beim ersten Rendern
    handleResize();

    // Fügt einen Event-Listener hinzu, um die Breite bei Änderungen zu überwachen
    window.addEventListener("resize", handleResize);

    // Bereinigt den Event-Listener beim Verlassen der Komponente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <HeaderNavBarMobile /> : <HeaderNavBarNorm />}
    </div>
  );
};

export default Navbar;
