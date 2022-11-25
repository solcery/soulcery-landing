import "./styles/Main.css";
import "./styles/1450.css";
import "./styles/1150.css";
import "./styles/1000.css";
import "./styles/800.css";
import "./styles/700.css";
import "./styles/650.css";
import "./styles/530.css";
import "./styles/480.css";
import "./styles/440.css";
import "./styles/400.css";
import "./styles/330.css";

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

import gitbook from "./assets/img/links/gitbook.svg";
import discord from "./assets/img/links/discord.svg";
import twitter from "./assets/img/links/twitter.svg";
import github from "./assets/img/links/github.svg";

function App() {
  return (
    <div className="App">
      <Top
        gitbook={gitbook}
        discord={discord}
        twitter={twitter}
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
        gitbook={gitbook}
        discord={discord}
        twitter={twitter}
        github={github}
      />
    </div>
  );
}

export default App;
