import React, { useState } from "react";

import Nav from "./assets/Components/Nav";
import { Home } from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./assets/Components/Service";

const App = () => {
  return (
    <div className="p-[5%]">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
