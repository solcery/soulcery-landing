import "./styles/App.css";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Games } from "./components/Games";
import { Collections } from "./components/Collections";
import { Players } from "./components/Players";
import { Creators } from "./components/Creators";
import { Roadmap } from "./components/Roadmap";
import { Team } from "./components/Team";
import { Contacts } from "./components/Contacts";

//Header
import logo from "./assets/img/header/logo.webp";
import header_button from "./assets/img/header/header_button.png";

//Links
import notion from "./assets/img/links/notion.png";
import discord from "./assets/img/links/discord.svg";
import twitter from "./assets/img/links/twitter.svg";
import medium from "./assets/img/links/medium.svg";
import github from "./assets/img/links/github.svg";

//Investors
import cultur3 from "./assets/img/investors/Cultur3.webp";
import sino from "./assets/img/investors/Sino.webp";
import solana from "./assets/img/investors/Solana.webp";

function App() {
  return (
    <div className="App">
      <div className="main_area">
        <header className="common_width">
          <img src={logo} alt="" />
          <nav>
            <li>
              <a href="https://docs.solcery.xyz" target="_blank">
                <img style={{ display: "block", width: "100%" }} src={notion} alt="" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/Yk9GEpPTA7" target="_blank">
                <img style={{ display: "block", width: "100%" }} src={discord} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SolceryGames" target="_blank">
                <img style={{ display: "block", width: "100%" }} src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@solcery" target="_blank">
                <img style={{ display: "block", width: "100%" }} src={medium} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/solcery" target="_blank">
                <img style={{ display: "block", width: "100%" }} src={github} alt="" />
              </a>
            </li>
          </nav>
        </header>

        <main className="common_width">
          <div className="presentation">
            <h2>Zero-code</h2>
            <h1>Game Engine</h1>
            <h3>powered by Solana</h3>
            <p>
              Create truly decentralized, open-source, community-driven games interoperable with any NFT collection on Solana
            </p>
            <button>
              <a href="https://docs.solcery.xyz" target="_blank">
                <img src={header_button} alt="" />
              </a>
            </button>
          </div>

          <div className="box_wrapper">
            <p>
              Solcery is a zero-code on-chain game engine on Solana that gives its users a quick and easy way to create blockchain games with no prior coding experience required, is governed by players and developers, and provides an unmatched level of interoperability and composability of game mechanics and in-game assets.
            </p>
          </div>
        </main>
      </div>

      <Games />
      <Collections />
      <Players />
      <Creators />
      <Roadmap />
      <Team />

      <div className="investor_wrapper common_width">
        <h1>Investors</h1>
        <p>
          We are honoured to be backed and adviced by these powerhouses. They have been of an immense help and an endless source of knowledge, feedback and experience in our journey so far.
        </p>

        <div className="inves_pic">
          <img src={cultur3} alt="" />
          <img src={sino} alt="" />
          <img src={solana} alt="" />
        </div>
      </div>

      <Contacts />
    </div>
  );
}

export default App;
