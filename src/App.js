import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routess";

function App() {

  const [darkTheme, setDarkTheme] = useState(true);


  return (
    <>
    <div className={darkTheme ? 'dark' : ''}>
      <div className=" dark:bg-gray-800 min-h-screen">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes />
      <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
