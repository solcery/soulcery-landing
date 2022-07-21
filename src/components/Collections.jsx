import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CollectionCard } from "./CollectionCard";

import okay_bears from "../assets/img/collections/okay_bears.webp";
import degods from "../assets/img/collections/degods.webp";
import daa from "../assets/img/collections/daa.webp";
import bd from "../assets/img/collections/bd.webp";
import bbd from "../assets/img/collections/bbd.webp";
import smb from "../assets/img/collections/smb.webp";
import solgods from "../assets/img/collections/solgods.webp";

export const Collections = () => {
    return (
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
    );
};