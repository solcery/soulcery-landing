import { Splide, SplideSlide } from "@splidejs/react-splide";

import road_map_line from "../assets/img/roadmap/roadmap_line.png";
import roadmap1 from "../assets/img/roadmap/road_1.svg";
import roadmap2 from "../assets/img/roadmap/road_2.svg";

export const Roadmap = () => {
    return (
        <div className="Roadmap common_width">
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
                            <img src={roadmap1} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
                            <img src={roadmap2} alt="" />

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
    );
};