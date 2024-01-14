import GoogleMapsApi from "./GoogleMapsApi";

function DistanceInfo() {
  const benefitsDetails = {
    worldwide: {
      item: "Europe-wide Shipping",
      logo: "images/FontAwesome/truck-fast-solid.svg",
    },
    mileage: {
      item: "Incredible Mileage Cover",
      logo: "images/FontAwesome/gas-pump-solid.svg",
    },
    pickup: {
      item: "Free Pickup up to 400 miles",
      logo: "images/FontAwesome/road-circle-check-solid.svg",
    },
    concierge: {
      item: "Personal Concierge Service",
      logo: "images/FontAwesome/person-military-to-person-solid.svg",
    },
    insurance: {
      item: "Full Insurance Coverage",
      logo: "images/FontAwesome/car-burst-solid.svg",
    },
    roadside: {
      item: "Complete Roadside Assistance",
      logo: "images/FontAwesome/handshake-angle-solid.svg",
    },
    support: {
      item: "24/7 Customer Support",
      logo: "images/FontAwesome/headset-solid.svg",
    },
  };

  return (
    <div className="h-medium flex flex-row p-5 justify-center items-center gap-10 font-genos w-full mobile:flex-col mobile:h-medium mobilelg:h-medium tablet:h-large laptop:h-medium laptop:flex-row desktop:h-medium desktop:flex-row">
      <div className="w-4/6 h-5/6 relative mobile:w-full">
        <p className="desktop:w-5/6 laptop:w-5/6 mobile:w-3/5 absolute top-0 desktop:left-1/2 laptop:left-1/3 mobile:left-1/3 transform desktop:-translate-x-1/2 mobile:-translate-x-1/3 z-10 bg-white p-5 text-center rounded-b-lg mobile:text-xs mobile:p-2 desktop:p-5 mobilelg:text-base tablet:text-lg laptop:text-xl desktop:text-xl">
          Free Supercar pickup/delivery to locations within a 400 mile radius of
          our European rental locations such as{" "}
          <strong>London, Paris, Berlin</strong> and <strong>Rome</strong>
        </p>
        <GoogleMapsApi />
      </div>
      <div className="h-5/6 mobile:w-full desktop:w-4/6 laptop:w-4/6">
        <ol className="h-full flex flex-col justify-around w-full bg-gray-50 mobile:text-base desktop:text-3xl laptop:text-2xl tablet:text-4xl mobilelg:text-2xl">
          {Object.keys(benefitsDetails).map((key) => {
            const { item, logo } = benefitsDetails[key];
            return (
              <div
                key={key}
                className="flex flex-row h-1/3 justify-center desktop:pl-20 laptop:pl-20tablet:pl-40 mobile:pl-5 items-center cursor-pointer hover:bg-gray-500"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("li").style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("li").style.color = "black";
                }}
              >
                <img
                  src={logo}
                  alt={item}
                  className="mr-2 mobile:h-5 mobile:w-5 mobilelg:h-6 mobilelg:w-6 tablet:h-8 tablet:w-8 laptop:h-10 laptop:w-10 desktop:h-12 desktop:w-12"
                />
                <li className="w-full text-center">{item}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default DistanceInfo;
