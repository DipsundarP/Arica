import React from "react";
import {  Routes, Route } from "react-router-dom";
import "jquery-ui-dist/jquery-ui"; // jQuery UI
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS



import Biplab from "./Pages/Biplab";
import Blog from "./Pages/Blog";
import Book from "./Pages/Book";
import Home from "./Pages/Home";
import Blogdetails from "./Pages/Blogdetails";
import Contact from "./Pages/Contact";
import Package from "./Pages/Package";
import Drpritam from "./Pages/Drpritam";


function App() {
// useEffect(() => {
//   // jQuery UI Datepicker initialization
//   if ($ && $.fn.datepicker) {
//     $("#datepicker").datepicker();
//   } else {
//     console.error("jQuery UI not loaded properly!");
//   }
// }, []);

// useEffect(() => {
//   Fancybox.bind("[data-fancybox]", {});
// }, []);


  
  

  return (
    <>
        
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biplab" element={<Biplab />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blogdetails" element={<Blogdetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package" element={<Package />} />
          <Route path="/drpritam" element={<Drpritam />} />
        </Routes>
       
    </>
  );
}

export default App;
