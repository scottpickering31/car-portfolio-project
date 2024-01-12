import { React } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

function CarouselImages({
  carMakes,
  selectedManufacturer,
  handleCarouselModelChange,
}) {
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
    <div className="flex flex-row justify-center items-center text-center h-1/2 ">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={true}
        stopOnHover={false}
        swipeable={true}
        dynamicHeight={true}
        emulateTouch={true}
        selectedItem={0}
        interval={2000}
        transitionTime={300}
        swipeScrollTolerance={5}
        ariaLabel={undefined}
        renderIndicator={renderCustomIndicator}
        width="100%"
        className="carousel-container w-1/2 mobile:hidden mobilelg: hidden tablet:block laptop:block desktop:block"
      >
        {Object.keys(carDetails).map((modelName, index) => {
          const car = carDetails[modelName];
          return (
            <div key={index} className="carousel-item relative">
              <img src={car.image} alt={modelName} className="h-72 relative" />
            </div>
          );
        })}
      </Carousel>

      <div className="flex flex-col gap-2 items-center justify-around p-3 text-center h-full mobile:w-full mobilelg:w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2">
        <h1 className="font-genos text-4xl pb-2 font-bold text-wrap underline underline-offset-8 mobile:p-5 mobilelg:p-5 tablet:p-0 laptop:p-0 desktop:p-0">
          Available Models for {selectedManufacturer}
        </h1>
        {Object.keys(carDetails).map((modelName, index) => {
          return (
            <div
              className="flex justify-between items-center text-lg tracking-wide w-full bg-customBlue uppercase text-white rounded-lg p-4 font-semibold cursor-pointer transition duration-300 transform hover:scale-105 hover:bg-green-500 hover:shadow-lg focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 active:bg-green-900"
              key={index}
              onClick={() => handleCarouselModelChange(modelName)}
            >
              <p>{modelName}</p>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCircleRight} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarouselImages;
