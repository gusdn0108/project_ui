import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer"
import Container from "./components/common/Container";
import Grid from '@mui/material/Grid'
import Login from './components/pages/Login'
import index from "./components/pages";
import { Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Responsive from "./components/common/Responsive";
import Article from './components/common/Article'
import { Box } from "@mui/system";
import BoxSx from "./components/common/Box";
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
