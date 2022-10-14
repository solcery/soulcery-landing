import footer_logo from "../assets/img/footer/footer_logo.png";
import footer_button from "../assets/img/footer/footer_button.png";

export const Contacts = ({ notion, discord, twitter, medium, github }) => {
    return (
        <div className="Contacts_wrapper common_width" id="contacts">
            <div className="Contacts">
                <h1>Join us</h1>
                <p>
                    We are always looking for talents and game enthusiasts. Wether you want to develop Soulcery with us, make cool games, propose an improvement or just share a story, shoot us a message!
                </p>

                <button>
                    <a href="https://twitter.com/messages/compose?recipient_id=1407885488543895552" target="_blank" rel="noreferrer">
                        <img src={footer_button} alt="" />
                    </a>
                </button>
                <img src={footer_logo} alt="" className="footer_logo" />

                <nav>
                    <li>
                        <a href="https://docs.soulcery.xyz" target="_blank" rel="noreferrer">
                            <img src={notion} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.com/invite/Yk9GEpPTA7" target="_blank" rel="noreferrer">
                            <img src={discord} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/SoulceryGames" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@solcery" target="_blank" rel="noreferrer">
                            <img src={medium} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/solcery" target="_blank" rel="noreferrer">
                            <img src={github} alt="" />
                        </a>
                    </li>
                </nav>
            </div>
        </div>
    );
};