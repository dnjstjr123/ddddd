import React from "react";
// import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import P1 from "./components/P1";
import P2 from "./components/P2";
import P3 from "./components/P3";
import P4 from "./components/P4";
import P5 from "./components/P5";
import P6 from "./components/P6";
import P7 from "./components/P7";
import Navigation from "./components/Navigation";

function App() {
  // const isPc = useMediaQuery({
  //   query: "(min-width:1024px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1023px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width:767px)",
  // });
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/p1" element={<P1 />} />
        <Route exact path="/p2" element={<P2 />} />
        <Route exact path="/p3" element={<P3 />} />
        <Route exact path="/p4" element={<P4 />} />
        <Route exact path="/p5" element={<P5 />} />
        <Route exact path="/p6" element={<P6 />} />
        <Route exact path="/p7" element={<P7 />} />
        <Route exact path="/navigation" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
