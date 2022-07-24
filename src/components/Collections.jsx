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
            <h2>supported</h2>

            <Splide
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
                <CollectionCard
                    img={okay_bears}
                    heading="Okay Bears"
                />
                <CollectionCard
                    img={degods}
                    heading="DeGods"
                />
                <CollectionCard
                    img={daa}
                    heading="Degenerate Ape Academy"
                />
                <CollectionCard
                    img={bd}
                    heading="Boryoku Dragons"
                />
                <CollectionCard
                    img={bbd}
                    heading="Boryoku Baby Dragons"
                />
                <CollectionCard
                    img={smb}
                    heading="Solana Monkey Business"
                />
                <CollectionCard
                    img={solgods}
                    heading="SOLgods"
                />
            </Splide>
        </div>
    );
};