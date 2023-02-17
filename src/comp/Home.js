import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Service from "./Service";

const Home = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
