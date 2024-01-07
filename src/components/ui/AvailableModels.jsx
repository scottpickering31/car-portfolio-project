import { React, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImages.css";

function CarouselImages({ carMakes, selectedManufacturer }) {
  const [toolTip, setToolTip] = useState(false);
  const carDetails = carMakes[selectedManufacturer].cars;

  const renderCustomIndicator = (clickHandler, isSelected, index, label) => {
    const indicatorStyles = {
      background: isSelected ? "#000" : "#fff",
      width: 8,
      height: 8,
      display: "inline-block",
      margin: "0 8px",
      cursor: "pointer",
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
    <>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={false}
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
        className="carousel-container w-3/4"
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
              {toolTip === index && (
                <div className="absolute top-0 left-0 bg-black bg-opacity-80 text-white p-2 rounded z-10 transform -translate-y-1/2 -translate-x-1/2">
                  <p>Hello!</p>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default CarouselImages;
