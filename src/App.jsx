import "./App.css";
import { useState } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Games } from "./components/Games";
import { Collections } from "./components/Collections";
import { Players } from "./components/Players";
import { Creators } from "./components/Creators";
import { Roadmap } from "./components/Roadmap";
import { TeamMember } from "./components/TeamMember";
import { Splide, SplideSlide } from "@splidejs/react-splide";

//Header
import logo from "./assets/img/header/logo.webp";
import play_now from "./assets/img/header/button.png";

//Links
import notion from "./assets/img/header/notion.png";
import discord from "./assets/img/header/discord.svg";
import twitter from "./assets/img/header/twitter.svg";
import medium from "./assets/img/header/medium.svg";
import github from "./assets/img/header/github.svg";

//Team
import tjumma from "./assets/img/team/tjumma.webp";
import teuzet from "./assets/img/team/teuzet.webp";
import ellador from "./assets/img/team/ellador.webp";
import kurutsu from "./assets/img/team/kurutsu.webp";
import opensr from "./assets/img/team/opensr.webp";
import kungurov from "./assets/img/team/kungurov.webp";
import loogris from "./assets/img/team/loogris.webp";
import irina from "./assets/img/team/irina.webp";
import merlin from "./assets/img/team/merlin.webp";
import mari from "./assets/img/team/mari.webp";

//Investors
import cultur3 from "./assets/img/investors/Cultur3.webp";
import sino from "./assets/img/investors/Sino.webp";
import solana from "./assets/img/investors/Solana.webp";

//Footer
import footer_logo from "./assets/img/footer/footer_logo.svg";

//Decor
import team_circle from "./assets/img/decor/team_circle.png";
import left_side_made from "./assets/img/decor/made_circle_left.png";
import made_circle_rigth from "./assets/img/decor/made_circle_rigth.png";

function App() {
  const [activeBox, setactiveBox] = useState(1);
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
              Create truly decentralized, open-source, community-driven games that can easily integrate with any NFT collection on Solana
            </p>
            <button>
              <a href="https://docs.solcery.xyz" target="_blank">
                <img src={play_now} alt="" />
              </a>
            </button>
          </div>

          <div className="box_wrapper">
            <p>
              Solcery is a zero-code on-chain game engine on Solana that gives its users a quick and easy way to create blockchain game experiences, instant access to an ever-growing library of these games, and an ability to turn any NFTs they own into the in-game assets with unique game mechanics.
            </p>
          </div>
        </main>
      </div>

      <Games />
      <Collections />
      <Players />
      <Creators />
      <Roadmap />

      <div className="Team common_width">
        <h1>Team</h1>
        <p>
          Most members of our team are gamedev veterans and have worked
          side by side on many projects before. We are happy to be able to put our forces together to create Solcery, mixing our knowledge and previous experience with a new vision for the future of the whole industry.
        </p>

        <div className="Team_wrapper">
          <TeamMember img={tjumma} heading="tjumma" para="Co-founder, CEO" />
          <TeamMember img={teuzet} heading="teuzet" para="Co-founder, CTO" />
          <TeamMember img={ellador} heading="ellador" para="Lead Game Designer" />
          <TeamMember img={kurutsu} heading="kurutsu" para="Rust Developer" />
          <TeamMember img={opensr} heading="opensr" para="Head of Client Engineering" />
          <TeamMember img={kungurov} heading="kungurov" para="Unity Developer" />
          <TeamMember img={loogris} heading="loogris" para="Game Designer" />
          <TeamMember img={irina} heading="irina" para="Sage Product Designer" />
          <TeamMember img={merlin} heading="merlin" para="Advisor" />
          <TeamMember img={mari} heading="mari" para="Artist" />
        </div>
      </div>
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

      <div className="investor_wrapper contact_wrapper common_width">
        <div className="inner_contact">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna enim
            nibh scelerisque quis. Quam phasellus sit quam sagittis, ut. Aliquet
            dolor etiam fames
          </p>

          <button>
            <img src={play_now} alt="" />
          </button>
          <img src={footer_logo} alt="" className="footer_logo" />

          <nav>
            <li>
              <a href="#">
                <img src={notion} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={discord} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={medium} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={github} alt="" />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
