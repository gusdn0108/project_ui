import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer"
import Container from "./components/common/Container";
import Responsive from "./components/common/Responsive";
import Signup from "./components/pages/Signup";
import ImageSilder from "./components/common/imageSilder";



const App = () => {
  return (

    <>

      <Router>
        <Container>
          <Responsive>
            <Header ></Header>
            <Routes>
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Slider" element={<ImageSilder/>} />
            </Routes>
          </Responsive>
        </Container>
      </Router>
      <Footer></Footer>
    </>

  );
};

export default App;
