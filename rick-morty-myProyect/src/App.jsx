import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import ErrorPage from "./views/ErrorPage.jsx";
import Form from "./views/Form.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx"
import "./App.css";


function App() {


  const location = useLocation();
  

  const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'iyasasaad@gmail.com';
const PASSWORD = '123456';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

  useEffect(() => {
    !access && navigate('/');
 }, [access]);




  const [characters, setCharacters] = useState([]);

  // nueva API
  //*https://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  function searchHandler(id) {
    axios(
      `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-hx-gcamey`
    ).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }
   
  return (
    <div className="App">
      {location.pathname === '/'? null : (<Nav onSearch={searchHandler} randomize={randomHandler} serAccess />)}
      
      <Routes>
      <Route path="/" element={<Form login={login}/>} /> 
<Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />} />
<Route path="/About" element={<About />} />
<Route path="/Detail/:id" element={<Detail />} /> 
<Route path="*" element={<ErrorPage />} />
</Routes>  
    </div>
  );
}

export default App;





 