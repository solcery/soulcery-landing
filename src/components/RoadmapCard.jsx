import { SplideSlide } from "@splidejs/react-splide";

export const RoadmapCard = ({ img, heading, time, description, link, newTab = true }) => {
    return (
        <SplideSlide>
            <a href={link} target={newTab ? "_blank" : "_self"}>
                <div className={`box`}>
                    <img src={img} alt="" />

                    <div className="presentation">
                        <h1>{heading}</h1>
                        <p>
                            <b>{time}. </b>
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </SplideSlide>
    );
};