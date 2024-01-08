import { React } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImages.css";

function CarouselImages({ carMakes, selectedManufacturer }) {
  const carDetails = carMakes[selectedManufacturer].cars;

  const renderCustomIndicator = (clickHandler, isSelected, index, label) => {
    const indicatorStyles = {
      background: isSelected ? "#000" : "#fff",
      width: 16,
      height: 16,
      display: "inline-block",
      margin: "0px 8px",
      cursor: "pointer",
      borderRadius: "50%",
    };

    return (
      <li
        style={indicatorStyles}
        onClick={clickHandler}
        onKeyDown={clickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <div className="flex flex-row justify-center items-center text-center h-full">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
        emulateTouch={true}
        selectedItem={0}
        interval={2000}
        transitionTime={500}
        swipeScrollTolerance={5}
        ariaLabel={undefined}
        renderIndicator={renderCustomIndicator}
        width="100%"
        className="carousel-container w-2/3"
      >
        {Object.keys(carDetails).map((modelName, index) => {
          const car = carDetails[modelName];
          return (
            <div
              key={index}
              className="carousel-item relative"
              onMouseOver={() => setToolTip(index)}
              onMouseOut={() => setToolTip(null)}
            >
              <img src={car.image} alt={modelName} className="h-72 relative" />
            </div>
          );
        })}
      </Carousel>

      <div className="flex flex-col gap-2 w-1/3 items-center justify-around p-2 text-center h-full">
        <h1 className="font-genos text-4xl font-bold text-wrap underline underline-offset-8">
          Available Models for {selectedManufacturer}
        </h1>
        {Object.keys(carDetails).map((modelName, index) => {
          return (
            <p
              key={index}
              className="text-lg tracking-widest w-4/5 bg-customBlue text-white rounded-lg p-4 font-semibold cursor-pointer"
            >
              {modelName}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default CarouselImages;
