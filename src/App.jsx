import "./styles/App.css";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Top } from "./components/Top";
import { Games } from "./components/Games";
import { Collections } from "./components/Collections";
import { Players } from "./components/Players";
import { Creators } from "./components/Creators";
import { Roadmap } from "./components/Roadmap";
import { Team } from "./components/Team";
import { Contacts } from "./components/Contacts";
import { Investors } from "./components/Investors";

function App() {
  return (
    <div className="App">
      <Top />
      <Games />
      <Collections />
      <Players />
      <Creators />
      <Roadmap />
      <Team />
      <Investors />
      <Contacts />
    </div>
  );
}

export default App;
