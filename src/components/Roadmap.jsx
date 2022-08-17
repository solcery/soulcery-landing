import { Splide } from "@splidejs/react-splide";
import { RoadmapCard } from "./RoadmapCard";

import road_map_line from "../assets/img/roadmap/roadmap_line.webp";
// import roadmap_hackathon from "../assets/img/roadmap/roadmap_hackathon.svg";
import roadmap_hackathon_done from "../assets/img/roadmap/roadmap_hackathon_done.svg";
import roadmap_game from "../assets/img/roadmap/roadmap_game.svg";
import roadmap_game_done from "../assets/img/roadmap/roadmap_game_done.svg";
import roadmap_round from "../assets/img/roadmap/roadmap_round.svg";
import roadmap_round_done from "../assets/img/roadmap/roadmap_round_done.svg";
import roadmap_vm_done from "../assets/img/roadmap/roadmap_vm_done.svg";
import roadmap_sage_done from "../assets/img/roadmap/roadmap_sage_done.svg";
import roadmap_forge from "../assets/img/roadmap/roadmap_forge.svg";
import roadmap_ratings from "../assets/img/roadmap/roadmap_ratings.svg";
import roadmap_sry from "../assets/img/roadmap/roadmap_sry.svg";
import roadmap_mobile from "../assets/img/roadmap/roadmap_mobile.svg";
import roadmap_p2p from "../assets/img/roadmap/roadmap_p2p.svg";
import roadmap_mm from "../assets/img/roadmap/roadmap_mm.svg";
import roadmap_achievements from "../assets/img/roadmap/roadmap_achievements.svg";

export const Roadmap = () => {
    return (
        <div className="Roadmap common_width" id="roadmap">
            <h1>Roadmap</h1>
            <p>
                The real treasure is the games we made along the way
            </p>

            <div className="slider_box">
                <img src={road_map_line} alt="" />

                <Splide
                    options={{
                        perPage: 4,
                        pagination: true,
                        breakpoints: {
                            1000: {
                                perPage: 3,
                            },
                            800: {
                                perPage: 2,
                            },
                            530: {
                                perPage: 1,
                            },
                        },
                    }}>
                    <RoadmapCard
                        img={roadmap_hackathon_done}
                        heading="Solana Season Hackathon"
                        time="June 2021"
                        description="Honorable mention and a proof of concept for a fully on-chain game"
                        link='https://solana.com/news/announcing-winners-of-the-solana-season-hackathon'
                    />
                    <RoadmapCard
                        img={roadmap_game_done}
                        heading="Summoner"
                        time="August 2021"
                        description="The very first game made with Solcery. A deckbuilding PvP game with a fully on-chain logic."
                        link='https://docs.solcery.xyz/games/summoner'
                    />
                    <RoadmapCard
                        img={roadmap_round_done}
                        heading="Seed Round"
                        time="September 2021"
                        description="Funding needed to bootstrap the team secured."
                        link='#investors'
                        newTab={false}
                    />
                    <RoadmapCard
                        img={roadmap_hackathon_done}
                        heading="Ignition Hackathon"
                        time="October 2021"
                        description="Honorable mention and a proof of concept for onboarding any Solana NFT into Solcery games."
                        link='https://solana.com/news/solana-ignition-hackathon-winners'
                    />
                    <RoadmapCard
                        img={roadmap_game_done}
                        heading="Solitary"
                        time="November 2021"
                        description="A single-player roguelike deckbuilder that pioneered external NFT onboarding."
                        link='https://docs.solcery.xyz/games/solitary'
                    />
                    <RoadmapCard
                        img={roadmap_vm_done}
                        heading="Solcery Virtual Machine"
                        time="December 2021"
                        description="An on-chain protocol meant to be the ultimate source of consensus around any game state or any game result."
                        link='https://docs.solcery.xyz/protocols/solcery-vm'
                    />
                    <RoadmapCard
                        img={roadmap_sage_done}
                        heading="Sage"
                        time="March 2022"
                        description="Solcery game editor itself - a zero-code engine and an easy-to-use content management system."
                        link='https://docs.solcery.xyz/sage'
                    />
                    <RoadmapCard
                        img={roadmap_game}
                        heading="Eclipse"
                        time="August 2022"
                        description="A single-player resource management strategy game with a focus on oboarding NFTs and community-driven development."
                        link='https://play.solcery.xyz/eclipse'
                    />
                    <RoadmapCard
                        img={roadmap_round}
                        heading="Strategic Round"
                        time="Q3 2022"
                        description="A round of investment to extend the team and speed up bringing our vision to life."
                    //TODO: link to the deck
                    />
                    <RoadmapCard
                        img={roadmap_ratings}
                        heading="Ratings"
                        time="Q3 2022"
                        description="Protocols and services to bring competitiveness to the next level and reward the best."
                    />
                    <RoadmapCard
                        img={roadmap_sry}
                        heading="SRY token launch"
                        time="Q4 2022"
                        description="The launch of SRY token - the essential piece in decentralizing Solcery ecosystem."
                    />
                    <RoadmapCard
                        img={roadmap_forge}
                        heading="Solcery Forge"
                        time="Q4 2022"
                        description="A protocol that handles turning any Solana NFT into an in-game asset interoperable for all Solcery games."
                        link='https://docs.solcery.xyz/protocols/solcery-forge'
                    />
                    <RoadmapCard
                        img={roadmap_mobile}
                        heading="Mobile client"
                        time="Q1 2023"
                        description="Solcery starts its journey with SAGA and SMSS - the mobile-native crypto stack."
                    />
                    <RoadmapCard
                        img={roadmap_p2p}
                        heading="P2P protocol"
                        time="Q1 2023"
                        description="A protocol for direct trustless communication between players clients essential for making our games faster and cheaper."
                        link='https://docs.solcery.xyz/protocols/p2p'
                    />
                    <RoadmapCard
                        img={roadmap_mm}
                        heading="Matchmaking"
                        time="Q1 2023"
                        description="A robust customizable protocol which games can utilize for matching their players by any property."
                    />
                    <RoadmapCard
                        img={roadmap_achievements}
                        heading="Achievements"
                        time="Q2 2023"
                        description="A system of game-specific and ecosystem-wide achievements."
                    />
                </Splide>
            </div>
        </div>
    );
};