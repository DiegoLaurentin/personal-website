import './css/app.css';
import react from 'react';
import { Navbar } from "./navbar.js";
import { Header } from "./Header";
// import { Footer } from "./footer";

function App() {
  return (
    <react.Fragment>
      <Navbar />
      <Header />
      
    </react.Fragment>
  );
}

export default App;
