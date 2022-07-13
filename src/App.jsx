import "./App.css";
import { useState } from "react";
import logo from "./assets/img/logo.svg";
import twiiter from "./assets/img/twiiter.svg";
import discord from "./assets/img/discord.svg";
import m from "./assets/img/m.svg";
import left_side_made from "./assets/img/made_circle_left.png";
import made_circle_rigth from "./assets/img/made_circle_rigth.png";

import discord2 from "./assets/img/discord2.svg";
import play_now from "./assets/img/play_now.png";
import footer_logo from "./assets/img/footer_logo.svg";
import { MadeSolceryCard } from "./components/MadeSolceryCard";
import card1img from "./assets/img/made_card_1.png";
import card2img from "./assets/img/made_card_2.png";
import card3img from "./assets/img/made_card_3.png";
import first_eth from "./assets/img/first_eth.png";
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
import inves4 from "./assets/img/inves4.png";
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
import { Createors } from "./components/Createors";
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
              <a href="#">
                <img src={discord2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twiiter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={m} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={discord} alt="" />
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
            }}
          >
            <SplideSlide>
              <MadeSolceryCard
                img={card1img}
                heading="Service 01"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card2img}
                heading="Service 02"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card3img}
                heading="Service 03"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>

            <SplideSlide>
              <MadeSolceryCard
                img={card1img}
                heading="Service 01"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card2img}
                heading="Service 02"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card3img}
                heading="Service 03"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card1img}
                heading="Service 01"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card2img}
                heading="Service 02"
                para="Solcery Editor is web-based and does not require any external building"
              />
            </SplideSlide>
            <SplideSlide>
              <MadeSolceryCard
                img={card3img}
                heading="Service 03"
                para="Solcery Editor is web-based and does not require any external building"
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
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>

          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>

          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>

          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={first_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={second_eth} />
          </SplideSlide>
          <SplideSlide>
            <CollectionCard img={third_eth} />
          </SplideSlide>
        </Splide>
      </div>

      <Createors />
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
              pagination: false,

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
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box active`}>
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
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box`}>
                <img src={road2} alt="" />
                <div className="presentation">
                  <h1>Solcery Forge</h1>
                  <p>
                    NFT projects require one, they help set purpose and intent .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road3} alt="" />

                <div className="presentation">
                  <h1>Game builder</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product.
                  </p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box ${activeBox == 4 && "active"}`}>
                <img src={road4} alt="" />

                <div className="presentation">
                  <h1>Game store</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
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
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box`}>
                <img src={road2} alt="" />
                <div className="presentation">
                  <h1>Solcery Forge</h1>
                  <p>
                    NFT projects require one, they help set purpose and intent .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road3} alt="" />

                <div className="presentation">
                  <h1>Game builder</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product.
                  </p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road4} alt="" />

                <div className="presentation">
                  <h1>Game store</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
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
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box`}>
                <img src={road2} alt="" />
                <div className="presentation">
                  <h1>Solcery Forge</h1>
                  <p>
                    NFT projects require one, they help set purpose and intent .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road3} alt="" />

                <div className="presentation">
                  <h1>Game builder</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product.
                  </p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road4} alt="" />

                <div className="presentation">
                  <h1>Game store</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
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
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box`}>
                <img src={road2} alt="" />
                <div className="presentation">
                  <h1>Solcery Forge</h1>
                  <p>
                    NFT projects require one, they help set purpose and intent .
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road3} alt="" />

                <div className="presentation">
                  <h1>Game builder</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product.
                  </p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide
              onClick={(e) => {
                document
                  .querySelector(".box.active")
                  .classList.remove("active");
                e.target.querySelector(".box").classList.add("active");
              }}
            >
              <div className={`box `}>
                <img src={road4} alt="" />

                <div className="presentation">
                  <h1>Game store</h1>
                  <p>
                    In other words, a roadmap helps set expectations on when
                    product
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
          {/* <img src={inves4} alt="" /> */}
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
                <img src={discord2} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twiiter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={m} alt="" />
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
