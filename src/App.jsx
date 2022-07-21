import "./App.css";
import { useState } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { CollectionCard } from "./components/CollectionCard";
import { Team } from "./components/Team";
import { Creators as Creators } from "./components/Creators";
import { Players } from "./components/Players";
import { GameCard } from "./components/GameCard";
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

//Games
import summoner_cover from "./assets/img/games/summoner.webp";
import eclipse_cover from "./assets/img/games/eclipse.webp";
import solitary_cover from "./assets/img/games/solitary.webp";

//Collections
import okay_bears from "./assets/img/collections/okay_bears.webp";
import degods from "./assets/img/collections/degods.webp";
import daa from "./assets/img/collections/daa.webp";
import bd from "./assets/img/collections/bd.webp";
import bbd from "./assets/img/collections/bbd.webp";
import smb from "./assets/img/collections/smb.webp";
import solgods from "./assets/img/collections/solgods.webp";

//Roadmap
import road_map_line from "./assets/img/roadmap/roadmap_line.png";
import road1 from "./assets/img/roadmap/road_1.svg";
import road2 from "./assets/img/roadmap/road_2.svg";
import road3 from "./assets/img/roadmap/road_3.svg";
import road4 from "./assets/img/roadmap/road_4.svg";

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

      <div className="games_wrapper">
        {/* <img src={left_side_made} alt="" className="left_side" style = {{zIndex: -100}}/> */}
        {/* <img src={made_circle_rigth} alt="" className="right_side" style = {{zIndex: -100}}/> */}
        <div className="games common_width">
          <h1>Made with Solcery</h1>

          <Splide
            aria-label="My Favorite Images"
            options={{
              perPage: 3,
              gap: 20,
              arrows: false,
              breakpoints: {
                1200: {
                  gap: 0,
                },
                800: {
                  perPage: 1,
                },
              },
              // speed: 1000,
            }}
          >
            <SplideSlide>
              <GameCard
                img={summoner_cover}
                heading="Summoner"
                description="Summoner is a deckbuilding PvP game. You will be building a deck from a constantly replenished  set of cards always available to both players and aim to defeat your opponent with them."
              />
            </SplideSlide>
            <SplideSlide>
              <GameCard
                img={eclipse_cover}
                heading="Eclipse"
                description="Eclipse is a single-player resource management strategy game about a band of individuals forced to work together in their desperate struggle to live through a magical catastrophe ravaging their world."
              />
            </SplideSlide>
            <SplideSlide>
              <GameCard
                img={solitary_cover}
                heading="Solitary"
                description="Single-player roguelike deckbuilder that takes you for an adventure through a dungeon teeming with monsters and otherworldly threats."
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="collection common_width">
        <h1>Collections</h1>
        <h2>Supported</h2>

        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 5,
            gap: 20,
            arrows: false,
            breakpoints: {
              1150: {
                perPage: 4,
              },
              800: {
                perPage: 2,
              },
              650: {
                perPage: 2,
              },
            },
          }}
        >
          <SplideSlide>
            <CollectionCard
              img={okay_bears}
              heading="Okay Bears"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={degods}
              heading="DeGods"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={daa}
              heading="Degenerate Ape Academy"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={bd}
              heading="Boryoku Dragons"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={bbd}
              heading="Boryoku Baby Dragons"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={smb}
              heading="Solana Monkey Business"
            />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard
              img={solgods}
              heading="SOLgods"
            />
          </SplideSlide>
        </Splide>
      </div>

      <Players />
      <Creators />

      <div className="team common_width">
        <h1>Roadmap</h1>
        <p>
          Solcery is a zero-code on-chain game engine on Solana that gives its
          users a quick and easy way to create blockchain game experiences
        </p>

        <div className="slider_box">
          <img src={road_map_line} alt="" />

          <Splide
            aria-label="My Favorite Images"
            options={{
              perPage: 4,
              pagination: true,

              //reduce the number of slides per screen with lower resolution
              breakpoints: {
                1000: {
                  perPage: 3,
                },
                800: {
                  perPage: 2,
                },
                600: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide
              onClick={(e) => window.open('https://solana.com/news/announcing-winners-of-the-solana-season-hackathon', '_blank', 'noopener,noreferrer')}
            // onClick={(e) => {
            //   document
            //     .querySelector(".box.active")
            //     .classList.remove("active");
            //   e.target.querySelector(".box").classList.add("active");
            // }}
            >
              {/* <div className={`box active`}> */}
              <div className={`box`}>
                <img src={road1} alt="" />

                <div className="presentation">
                  <h1>Solana Season Hackathon</h1>
                  <p>
                    <b>June 2021. </b>
                    Honorable mention and a proof of concept for a fully on-chain game.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Summoner</h1>
                  <p>
                    <b>August 2021. </b>
                    The very first game made with Solcery. A deckbuilding PvP game with a fully on-chain logic.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Seed Round</h1>
                  <p>
                    <b>September 2021. </b>
                    Funding needed to bootstrap the team secured.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Ignition Hackathon</h1>
                  <p>
                    <b>October 2021. </b>
                    Honorable mention and a proof of concept for onboarding any Solana NFT into Solcery games.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Solitary</h1>
                  <p>
                    <b>November 2021. </b>
                    A single-player roguelike deckbuilder that pioneered external NFT onboarding.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Solcery Virtual Machine</h1>
                  <p>
                    <b>December 2021. </b>
                    An on-chain protocol meant to be the ultimate source of consensys around any game state or any game result.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Sage</h1>
                  <p>
                    <b>March 2022. </b>
                    Solcery game editor itself - a zero-code engine and an easy-to-use content management system.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Eclipse</h1>
                  <p>
                    <b>August 2022. </b>
                    A single-player resource management strategy game with a focus on oboarding NFTs and community-driven development.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Strategic Round</h1>
                  <p>
                    <b>Q3 2022. </b>
                    A round of investment to extend the team and speed up bringing our vision to life.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Ratings</h1>
                  <p>
                    <b>Q3 2022. </b>
                    Ratings and Leaderboards protocols to bring competitiveness and reward the best.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>SRY token launch</h1>
                  <p>
                    <b>Q4 2022. </b>
                    The launch of SRY token - the essential piece in decentralizing Solcery ecosystem.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Solcery Forge</h1>
                  <p>
                    <b>Q4 2022. </b>
                    A protocol that handles turning any Solana NFT into an in-game asset interoperable for all Solcery games.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Mobile client</h1>
                  <p>
                    <b>Q1 2023. </b>
                    Solcery starts its journey with SAGA and SMSS - the mobile-native crypto stack.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>P2P protocol</h1>
                  <p>
                    <b>Q1 2023. </b>
                    A protocol for direct trustless communication between players clients essential for making our games faster and cheaper.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Matchmaking</h1>
                  <p>
                    <b>Q1 2023. </b>
                    A robust customizable protocol which games can utilize for matching their players by any property.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className={`box`}>
                <img src={road2} alt="" />

                <div className="presentation">
                  <h1>Achievements</h1>
                  <p>
                    <b>Q2 2023. </b>
                    A system of game-specific and ecosystem-wide achievements.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="team common_width">
        {/* <img src={team_circle} alt="" style = {{zIndex: -100}}/> */}
        <h1>Team</h1>
        <p>
          Most members of our team are gamedev veterans and have worked
          side by side on many projects before. We are happy to be able to put our forces together to create Solcery, mixing our knowledge and previous experience with a new vision for the future of the whole industry.
        </p>

        <div className="team_wrapper">
          <Team img={tjumma} heading="tjumma" para="Co-founder, CEO" />
          <Team img={teuzet} heading="teuzet" para="Co-founder, CTO" />
          <Team img={ellador} heading="ellador" para="Lead Game Designer" />
          <Team img={kurutsu} heading="kurutsu" para="Rust Developer" />
          <Team img={opensr} heading="opensr" para="Head of Client Engineering" />
          <Team img={kungurov} heading="kungurov" para="Unity Developer" />
          <Team img={loogris} heading="loogris" para="Game Designer" />
          <Team img={irina} heading="irina" para="Sage Product Designer" />
          <Team img={merlin} heading="merlin" para="Advisor" />
          <Team img={mari} heading="mari" para="Artist" />
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
