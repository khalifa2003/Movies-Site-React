import NavBar from "./Component/NavBar";
import { Container } from "react-bootstrap";
import MoviesList from "./Component/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDeatails from "./Component/MovieDeatails";

const App = () => {

  return (
    <div className="color-body font body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDeatails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
