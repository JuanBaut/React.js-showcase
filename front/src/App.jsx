import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CardContainer from "./components/CardContainer/CardContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from './components/Favorites/Favorites.jsx'

const email = "1@g.com";
const password = "1";

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFilter);
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const index = characters.findIndex(
            (character) => character.id === data.id
          );
          if (index === -1) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            const newCharacters = [...characters];
            newCharacters[index] = data;
            setCharacters(newCharacters);
          }
        } else {
          alert("No characters with this ID!");
        }
      }
    );
  };

  return (
    <div>
      {
        location.pathname !== "/" && <NavBar onSearch={onSearch} />
      }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<CardContainer characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
