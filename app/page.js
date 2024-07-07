
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Episodes from "./components/Episodes/Episodes";
import About from "./components/About/About";

import styles from "./page.module.css";

export default function Castaway() {
  return (
    <main >
      <Header />
      <Home />
      <Episodes />
      <About />


    </main>
  );
}
