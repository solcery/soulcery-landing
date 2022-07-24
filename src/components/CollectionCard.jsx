import { SplideSlide } from "@splidejs/react-splide";

export const CollectionCard = ({ img, heading }) => {
  return (
    <SplideSlide>
      <div className="CollectionCard">
        <img src={img} alt="" />
        <div className="presentation">
          <div className="bottom_area">
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
    </SplideSlide>
  );
};
