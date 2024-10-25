import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import CharactersListPage from "./pages/charactersListPage";
import FavouritesPage from "./pages/favouritesPage";
import SearchBar from "./components/searchBar/searchBar";
import CharacterCard from "./components/characterCard/characterCard";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      {/* <CharacterCard /> */}

      <Routes>
        <Route path="/" element={<CharactersListPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
