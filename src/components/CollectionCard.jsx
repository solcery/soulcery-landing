import { SplideSlide } from "@splidejs/react-splide";

export const CollectionCard = ({ img, heading, link }) => {
  return (

    <SplideSlide>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="CollectionCard">
          <img src={img} alt="" />
          <div className="presentation">
            <div className="bottom_area">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </a>
    </SplideSlide>

  );
};
