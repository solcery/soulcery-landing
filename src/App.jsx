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

import notion from "./assets/img/links/notion.png";
import discord from "./assets/img/links/discord.svg";
import twitter from "./assets/img/links/twitter.svg";
import medium from "./assets/img/links/medium.svg";
import github from "./assets/img/links/github.svg";

function App() {
  return (
    <div className="App">
      <Top
        notion={notion}
        discord={discord}
        twitter={twitter}
        medium={medium}
        github={github}
      />
      <Games />
      <Collections />
      <Players />
      <Creators />
      <Roadmap />
      <Team />
      <Investors />
      <Contacts
        notion={notion}
        discord={discord}
        twitter={twitter}
        medium={medium}
        github={github}
      />
    </div>
  );
}

export default App;
