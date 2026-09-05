import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";
import { Navbar } from "../components/navbar";

export default function Hero() {
  const { t } = useTranslation("translation");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={`hero ${visible ? "fade-in" : ""}`}>
      {" "}
      <Navbar />
      
    </section>
  );
}
