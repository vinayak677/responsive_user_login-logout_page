import React from 'react'
import Main from './Main'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Blog from './comp/Blog';
import Contact from './comp/Contact';
import Service from './comp/Service';
import Form from './Form';
import Navbar from './Navbar';



const App = () => {
  return (
    <Main/>
    // <BrowserRouter>
    // <Main/>
    // {/* <Navbar/> */}
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/service" element={<Service />} />
    //     <Route path="/" element={<Form />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App