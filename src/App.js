import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Index from "./components/pages/index";
import Footer from "./components/common/Footer"
import Container from "./components/common/container";



const App = () => {
  return (
    <>
      <Router>
        <Container>
        <Header />
      
        <Routes>
          <Route path="/" index element={<Index />} />
        </Routes>

        </Container>
      </Router>


      <Footer/>
    </>
  );
};

export default App;
