import { Splide } from "@splidejs/react-splide";
import { CollectionCard } from "./CollectionCard";

import daa from "../assets/img/collections/daa.webp";
import smb from "../assets/img/collections/smb.webp";
import bd from "../assets/img/collections/bd.webp";
import bbd from "../assets/img/collections/bbd.webp";
import solgods from "../assets/img/collections/solgods.webp";
import degods from "../assets/img/collections/degods.webp";
import okay_bears from "../assets/img/collections/okay_bears.webp";
import orcs from "../assets/img/collections/orcs.webp";
import blocksmith_labs from "../assets/img/collections/blocksmith_labs.webp";
import cwm from "../assets/img/collections/cwm.webp";
import grim_syndicate from "../assets/img/collections/grim_syndicate.webp";
import degen_dojo from "../assets/img/collections/degen_dojo.webp";

export const Collections = () => {
    return (
        <div className="collection common_width" id="collections">
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
                    img={daa}
                    heading="Degenerate Ape Academy"
                    link='https://www.degenape.academy'
                />
                <CollectionCard
                    img={smb}
                    heading="SMB"
                    link='https://solanamonkey.business'
                />
                <CollectionCard
                    img={bd}
                    heading="Boryoku Dragons"
                    link='https://boryokudragonz.io'
                />
                <CollectionCard
                    img={bbd}
                    heading="Boryoku Baby Dragons"
                    link='https://boryokudragonz.io'
                />
                <CollectionCard
                    img={solgods}
                    heading="SOLgods"
                    link='https://thefracture.art'
                />
                <CollectionCard
                    img={degods}
                    heading="DeGods"
                    link='https://www.degods.com'
                />
                <CollectionCard
                    img={okay_bears}
                    heading="Okay Bears"
                    link='https://www.okaybears.com'
                />
                <CollectionCard
                    img={orcs}
                    heading="The Orcs"
                    link='https://theorcs.io'
                />
                <CollectionCard
                    img={blocksmith_labs}
                    heading="Blocksmith Labs"
                    link='https://www.blocksmithlabs.com'
                />
                <CollectionCard
                    img={cwm}
                    heading="Catalina Whale Mixer"
                    link='https://www.catalinawhalemixer.com'
                />
                <CollectionCard
                    img={grim_syndicate}
                    heading="Grim Syndicate"
                    link='https://grimsyndicate.com'
                />
                <CollectionCard
                    img={degen_dojo}
                    heading="Degen Dojo"
                    link='https://www.degendojonft.com'
                />
            </Splide>
        </div>
    );
};