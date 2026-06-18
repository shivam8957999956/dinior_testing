import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar";
import Feed from "./pages/Feed/Feed";
import Competitions from "./pages/Competitions/Competitions";
import Restaurants from "./pages/Discover/Restaurants";
import Footer from "./components/Footer/Footer";
import RestaurantDetail from "./pages/RestaurantDetail/RestaurantDetail";
import CompetitionDetail from "./pages/CompetitionDetail/CompetitionDetail";
import Submit from "./pages/Submit/Submit";
import FullMenu from "./pages/FullMenu/FullMenu";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/discover" element={<Restaurants />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          <Route path="/competitions/:id" element={<CompetitionDetail />} />
          <Route path="/menu/:id" element={<FullMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
