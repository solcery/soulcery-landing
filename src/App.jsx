import "./App.css";
import { useState } from "react";
import logo from "./assets/img/logo.svg";

import twitter from "./assets/img/header/twitter.svg";
import github from "./assets/img/header/github.svg";
import medium from "./assets/img/header/medium.svg";
import discord from "./assets/img/header/discord.svg";

import summoner_cover from "./assets/img/games/summoner.png";
import eclipse_cover from "./assets/img/games/eclipse.png";
import solitary_cover from "./assets/img/games/solitary.png";

import left_side_made from "./assets/img/made_circle_left.png";
import made_circle_rigth from "./assets/img/made_circle_rigth.png";

import play_now from "./assets/img/play_now.png";
import footer_logo from "./assets/img/footer_logo.svg";
import { MadeSolceryCard } from "./components/MadeSolceryCard";

import okay_bears from "./assets/img/collections/okay_bears.webp";
import degods from "./assets/img/collections/degods.webp";
import daa from "./assets/img/collections/daa.webp";
import bd from "./assets/img/collections/bd.webp";
import bbd from "./assets/img/collections/bbd.webp";
import smb from "./assets/img/collections/smb.webp";
import solgods from "./assets/img/collections/solgods.webp";

import second_eth from "./assets/img/second_eth.png";
import third_eth from "./assets/img/third_eth.png";
import team1 from "./assets/img/team1.png";
import team2 from "./assets/img/team2.png";
import team3 from "./assets/img/team3.png";
import team4 from "./assets/img/team4.png";
import team5 from "./assets/img/team5.png";
import team6 from "./assets/img/team6.png";
import team7 from "./assets/img/team7.png";
import team8 from "./assets/img/team8.png";
import cultur3 from "./assets/img/investors/Cultur3.png";
import sino from "./assets/img/investors/Sino.png";
import solana from "./assets/img/investors/Solana.png";
import team_circle from "./assets/img/team_circle.png";
import road_map_line from "./assets/img/lone_line_road_map.png";

import road1 from "./assets/img/road_1.svg";
import road2 from "./assets/img/road_2.svg";
import road3 from "./assets/img/road_3.svg";
import road4 from "./assets/img/road_4.svg";

import road_map_arrow from "./assets/img/road_map_arrow.svg";
import road_map_arrow_right from "./assets/img/road_map_arrow_right.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { CollectionCard } from "./components/CollectionCard";
import { Team } from "./components/Team";
import { Creators as Creators } from "./components/Creators";
import { Players } from "./components/Players";

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
                <img style={{ display: "block", width: "100%" }} src={discord} alt="" />
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
            <h2>Zero-Code</h2>
            <h1>Game Engine on Solana</h1>
            <p>
              Solcery comes with an intuitive visual programming node editor
              that allows you to rapidly prototype, expand, and edit your game
              logic
            </p>
            <button>
              <img src={play_now} alt="" />
            </button>
          </div>

          <div className="box_wrapper">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </div>
        </main>
      </div>

      <div className="made_width_solcery_wrapper">
        <img src={left_side_made} alt="" className="left_side" />
        <img src={made_circle_rigth} alt="" className="right_side" />
        <div className="made_width_solcery common_width">
          <h1>Made with Solcery</h1>

          <Splide
            aria-label="My Favorite Images"
            options={{
              perPage: 3,
              gap: 20,
              arrows: false,
              breakpoints: {
                900: {
                  perPage: 1,
                },
              },
              // speed: 1000,
            }}
          >
            <SplideSlide>
              <MadeSolceryCard
                img={summoner_cover}
                heading="Summoner"
                para="Summoner is a deckbuilding PvP game. You will be building a deck from a constantly replenished  set of cards always available to both players and aim to defeat your opponent with them."
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={eclipse_cover}
                heading="Eclipse"
                para="Eclipse is a single-player resource management strategy game about a band of individuals forced to work together in their desperate struggle to live through a magical catastrophe ravaging their world."
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={solitary_cover}
                heading="Solitary"
                para="Single-player roguelike deckbuilder that takes you for an adventure through a dungeon teeming with monsters and otherworldly threats."
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="collection common_width">
        <h2>Supported</h2>
        <h1>Collection</h1>

        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 3,
            gap: 20,
            arrows: false,
            breakpoints: {
              900: {
                perPage: 2,
              },
              1940: {
                perPage: 5,
              },
              1610: {
                perPage: 4,
              },
              1150: {
                perPage: 3,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <CollectionCard img={okay_bears} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={degods} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={daa} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={bd} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={bbd} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={smb} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={solgods} />
          </SplideSlide>
        </Splide>
      </div>

      <Creators />
      <Players />

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
                900: {
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
                    A nft roadmap is a strategic planning tool used to set
                    desired
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
                    A nft roadmap is a strategic planning tool used to set
                    desired
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="team common_width">
        <img src={team_circle} alt="" />
        <h1>Team</h1>
        <p>
          Right so community managers there's different types you want to have
          mods as well and then as the community builds. Can start to get these
          people and build out the team
        </p>

        <div className="team_wrapper">
          <Team img={team1} heading="Tjumma" para="Product Management" />
          <Team img={team2} heading="Teuzet" para="Development" />
          <Team img={team3} heading="Ellader" para="Game Design" />
          <Team img={team4} heading="Kurutsu" para="Rust Development" />
          <Team img={team5} heading="Last_admiral" para="UI/UX Designer" />
          <Team img={team6} heading="OpenSR" para="UI/UX Designer" />
          <Team
            img={team7}
            heading="A rtem.Kungurov"
            para="Unity Development"
          />
          <Team img={team8} heading="Thomas Lee" para="Unity Development" />
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
                <img src={discord} alt="" />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
