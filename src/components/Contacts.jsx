import footer_logo from "../assets/img/footer/footer_logo.png";
import footer_button from "../assets/img/footer/footer_button.png";

import notion from "../assets/img/links/notion.png";
import discord from "../assets/img/links/discord.svg";
import twitter from "../assets/img/links/twitter.svg";
import medium from "../assets/img/links/medium.svg";
import github from "../assets/img/links/github.svg";

export const Contacts = () => {
    return (
        <div className="Contacts_wrapper common_width">
            <div className="Contacts">
                <h1>Join us</h1>
                <p>
                    We are always looking for talents and game enthusiasts. Wether you want to develop Solcery with us, make cool games, propose an improvement or just share a story, shoot us a message!
                </p>

                <button>
                    <img src={footer_button} alt="" />
                </button>
                <img src={footer_logo} alt="" className="footer_logo" />

                <nav>
                    <li>
                        <a href="#">
                            <img src={notion} alt="" />
                        </a>
                    </li>
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
                            <img src={github} alt="" />
                        </a>
                    </li>
                </nav>
            </div>
        </div>
    );
};