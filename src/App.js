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

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Container fixed>
//           <Header />
//           <Grid xs="10">
//             <Grid item xs="2">
//               <Routes>
//                 <Route path="/" index element={<Index />} />
//               </Routes>
//             </Grid>
//             <Grid item xs="12">
//               <Routes>
//                 <Route path="/Login" index element={<Login />} />
//               </Routes>
//             </Grid>
//           </Grid>
//         </Container>
//       </Router>
//     </>
//   );
// };

const App = () => {
  return (

    <>

      <Router>

        <Container>

          <Responsive>

            <Header ></Header>

            <Navbar></Navbar>

            <Article></Article>

            {/* <Login /> */}

          </Responsive>

        </Container>

      </Router>
      <Footer></Footer>
    </>

  );
};

export default App;
