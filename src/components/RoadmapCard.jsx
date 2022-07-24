import { SplideSlide } from "@splidejs/react-splide";

export const RoadmapCard = ({ img, heading, time, description, link, newTab = true }) => {
    return (
        <SplideSlide
            onClick={(e) => link ? window.open(link, newTab ? '_blank' : '_self', 'noopener,noreferrer') : null}
        >
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
        </SplideSlide>
    );
};