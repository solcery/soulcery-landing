import { TeamMember } from "./TeamMember";

import tjumma from "../assets/img/team/tjumma.webp";
import teuzet from "../assets/img/team/teuzet.webp";
import ellador from "../assets/img/team/ellador.webp";
import kurutsu from "../assets/img/team/kurutsu.webp";
import opensr from "../assets/img/team/opensr.webp";
import kungurov from "../assets/img/team/kungurov.webp";
import loogris from "../assets/img/team/loogris.webp";
import irina from "../assets/img/team/irina.webp";
import merlin from "../assets/img/team/merlin.webp";
import mari from "../assets/img/team/mari.webp";

export const Team = () => {
    return (
        <div className="Team common_width" id="team">
            <h1>Team</h1>
            <p>
                Most members of our team are gamedev veterans and have worked
                side by side on many projects before. We are happy to be able to put our forces together to create Solcery, mixing our knowledge and previous experience with a new vision for the future of the whole industry.
            </p>

            <div className="Team_wrapper">
                <TeamMember img={tjumma} heading="tjumma" para="Co-founder, CEO" />
                <TeamMember img={teuzet} heading="teuzet" para="Co-founder, CTO" />
                <TeamMember img={ellador} heading="ellador" para="Head of Game Design" />
                <TeamMember img={kurutsu} heading="kurutsu" para="Rust Developer" />
                <TeamMember img={opensr} heading="opensr" para="Head of Client Engineering" />
                <TeamMember img={kungurov} heading="kungurov" para="Unity Developer" />
                <TeamMember img={loogris} heading="loogris" para="Game Designer" />
                <TeamMember img={irina} heading="irina" para="Sage Product Designer" />
                <TeamMember img={merlin} heading="merlin" para="Advisor" />
                <TeamMember img={mari} heading="mari" para="Artist" />
            </div>
        </div>
    );
};