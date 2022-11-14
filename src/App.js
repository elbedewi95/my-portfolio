import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./Page";

// Components

function App() {

  const [pages] = useState([
    {
      name: "About Me"
    },
    {
      name: "My Work"
    },
    {
      name: "Contact Me"
    },
    {
      name: "My Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
          <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  )
}

export default App;