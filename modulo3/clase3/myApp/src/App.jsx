import React from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img src='' alt='' onClick={() => setOpen(!open)} />

      {open && <Card />}

      <Navbar />
      <Hero />
    </>
  );
}
