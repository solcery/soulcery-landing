import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GameCard } from "./GameCard";

import summoner from "../assets/img/games/summoner.webp";
import eclipse from "../assets/img/games/eclipse.webp";
import solitary from "../assets/img/games/solitary.webp";

export const Games = () => {
    return (
        <div className="Games_wrapper">
            <div className="Games common_width">
                <h1>Made with Solcery</h1>

                <Splide
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
                    }}
                >
                    <SplideSlide>
                        <GameCard
                            img={summoner}
                            heading="Summoner"
                            description="Summoner is a deckbuilding PvP game. You will be building a deck from a constantly replenished  set of cards always available to both players and aim to defeat your opponent with them."
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <GameCard
                            img={eclipse}
                            heading="Eclipse"
                            description="Eclipse is a single-player resource management strategy game about a band of individuals forced to work together in their desperate struggle to live through a magical catastrophe ravaging their world."
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <GameCard
                            img={solitary}
                            heading="Solitary"
                            description="Single-player roguelike deckbuilder that takes you for an adventure through a dungeon teeming with monsters and otherworldly threats."
                        />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
};